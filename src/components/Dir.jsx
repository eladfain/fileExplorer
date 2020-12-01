import React, {  }  from 'react';
import styled from 'styled-components';
import {Folder,Description} from '@material-ui/icons';
import {red,yellow} from '@material-ui/core/colors';
const IconWrapper=styled.div`
padding:5px;

const P=styled.p`
margin:0px;
`
const Dir=({node,onclick})=>{
    let isFile=node.children.length>0;
    let Icon=isFile?Folder:Description;
    let color=isFile?yellow:red;
    return(
        <IconWrapper onClick={isFile?onclick:null} style={isFile?{"cursor": "pointer"}:null}>
        <Icon style={{color:color[500]}} ></Icon>
        <P>{node.name}</P>
        </IconWrapper>
        
    )
}
export default Dir;