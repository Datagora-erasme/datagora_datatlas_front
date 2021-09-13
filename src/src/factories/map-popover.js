// Copyright (c) 2021 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

import React from 'react';
import {MapPopoverFactory} from 'kepler.gl/components';


//import CustomLayerHoverInfo from "./CustomLayerHoverInfo"




const CustomMapPopoverFactory = (...deps) => {
  const MapSidepanel = props => {
    console.log("#### HI")
    console.log(props.layerHoverProp)
    return  (
      <div className="PointSidePanel">
      <img src="https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"/>
      <h1>{props.layerHoverProp.data[0]}</h1>
  
      <div className="text-container">
          <p>Modellus est un service de conception, prototypage rapide et production par fabrication additive (impression 3D). Notre service de prototypage rapide vous permet d'obtenir vos éléments fonctionnels sous 24/72H dans une [...] Modellus est un service de conception.</p>
      </div>
      
      <div className="cat-container">
          <p>Expertise : Ingénierie / Mécanique</p>
          <p>Gouvernance : Industrie</p>
          <p>Offre : Prototypage</p>
          <p>Public cible : Industrie</p>
          
      </div>



  
    </div>
      )
  }


  return MapSidepanel;
};
CustomMapPopoverFactory.deps = MapPopoverFactory.deps;
export default CustomMapPopoverFactory;