import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronRight,
  faChevronDown,
} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import AnimateHeight from 'react-animate-height';
import classnames from 'classnames';
import { Override } from '../../../types/Override';
// import { AppStore } from '../../store';
import List from '../lists';
import { ButtonCollapse } from './style';

library.add(faChevronRight,faChevronDown);

export type CollapseProps = Override<
  React.ComponentPropsWithoutRef<'button'>,
  {
    text: string;
    textType: string;
    textProduits: string;
    btnType?: 'parent' | 'child';
    listNames?: string[] | any;
    idFilter?: string;
    filtername?: string;
    dayList?: string[];
    icon: IconDefinition;
  }
>;

const Collapse = ({
  text,
  textType,
  textProduits,
  btnType,
  listNames,
  idFilter,
  className,
  filtername,
  dayList,
  icon,
  ...props
}: CollapseProps) => {
  // const dispatch = useDispatch();
  // Toggle the visibility of buttons parent list
  const [isActive, setIsActive] = useState(false);
  const isActiveState = () => {
    setIsActive(!isActive);
  };

  const [height, setHeight] = useState(0);
  
  // Toggle the button linked layer vibility
  const [isLayerVisible, setIsLayerVisible] = useState(true);
  const isLayerVisibleState = () => {
    setIsLayerVisible(!isLayerVisible);
  };
  
  function TextCollaps(){
    if(text[0] === 'soustype'){
      return 'Type';
    } else if (text[0] === 'produits') {
      return 'Produits';
    } else if (text[0] === 'label') {
      return 'Label et Certifications';
    }
  }

  // Medium button styling + lits display
    // console.log("ID FILTER", idFilter)
    // console.log("List Names", listNames)

    return (
      <>
        <ButtonCollapse
        aria-expanded={ height !== 0 }
        aria-controls='panel-filter' 
          onClick={isActiveState}
          className={classnames('btn', className, { active: !isActive })}
          {...props}
        >
          <span>
            <FontAwesomeIcon 
            icon={!isActive ? faChevronRight : faChevronDown} 
            />
            {' '}
          </span>
          {TextCollaps()}
        </ButtonCollapse>
        
        <AnimateHeight
          style={{flexShrink: 0}}
          duration={500}
          height={!isActive ? 0 : 'auto'} 
          easing={'ease'}
        >
            <List 
              listNames={listNames} 
              idFilter={idFilter}
            />
        </AnimateHeight>
      </>
    ); 
};

export default Collapse;