import React, { useState, useEffect, useMemo } from 'react'
import {useDispatch, connect, useSelector } from "react-redux";

import {toggleModal, layerConfigChange} from "kepler.gl/actions";

import Button from './filter-side-panel/Button'

//Todo use redux instead ?
import instanceConf from '../static/instanceConf.json'

const buttonColorRange = instanceConf.theme.filterSidePanel.buttonColorRange



const FilterSidePanel = () => {

    const dispatch = useDispatch()

    const layer = useSelector((state) => state.keplerGl.map?.visState?.layers?.[0]) 
   
    
    // Get the filter values, id  and map them to buttons
    const filtersDomain = useSelector((state) => state.keplerGl.map?.visState?.filters??[])
    const layers = useSelector((state) => state.keplerGl.map?.visState?.layers??{})

  

    // use memo ne renvoie que la donnée - memoiser- une sorte de cache
    const filterTree = useMemo(() => {
        return Object.values(layers).map((value) => {
            return {label: value.config.label, id: value.config.dataId}
        })
    }, [filtersDomain, layers])

    //TODO Get layer color and use it for buttons bg color
    const Filters = filterTree.map((value, index) => {
        const datasetLabel = value.label
        const datasetId = value.id
        const datasetIndex = index

        const ParentBtn = <Button key={index} btnType="parent" bg={buttonColorRange[datasetIndex]} text={datasetLabel} layerId={index}/>

        const Domains = filtersDomain?.map((filter, index) => {
            const filterName = filter?.name
            const filterId = filter?.dataId
            const filterDomain = filter?.domain
            if (filterId == datasetId) {
                return (      
                        <li key={index} id="filter-parent-1" className="filter-parent">
                            <Button  bg={buttonColorRange[datasetIndex]} btnType="child" text={filterName[0]} listNames={filterDomain} idFilter={index}/>
                        </li>
                )
            }
        })

        return (
            <ul key={index}>
                {ParentBtn}
                {Domains}
            </ul>
        )
    })
    



    
    const [filtersarray, setFiltersarray] = useState([])
    //const [filtercat, setFiltercat] = useState();




  

    /*const test = (filtercat) => {
        if (filtersarray.includes(filtercat)) {
            console.log("Already in array")
            setFiltersarray(filtersarray.filter((cat)=>{ return cat != filtercat }))
            
            //console.log(filtersarray)
           
        }
        else {
            setFiltersarray(prevArray => [...prevArray, filtercat])
            console.log(filtersarray)
        }
        dispatch(setFilter(0,"value", filtercat))

    }*/


    const openAddData  = () => {
        dispatch(toggleModal("addData"))
    }

    return (
        <div className='filters'>
            {Filters}
        <ul>
            <Button btnType="parent"  bg="#5a8aa5" onClick={openAddData} text="Ajouter un calque" />
        </ul>
    </div>
    )

}

const dispatchToProps = dispatch => ({dispatch});

export default connect(dispatchToProps)(FilterSidePanel);