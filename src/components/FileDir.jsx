import React, { useState }  from 'react';
import creatTree from "../services/createTree";
import styled from 'styled-components';
import Dir from "./Dir";
import Button from '@material-ui/core/Button';
const FlexWrapper=styled.div`
display:flex;
`
const BackButtonWrapper=styled.div`
height:30px;
`


const FileDir=(props)=>{
    const [node,setNode]=useState(creatTree());
    const nodeList=node.children.map(e=><Dir node={e} key={e.name} onclick={()=>{setNode(e)}}/>)
    return(
        <>
        <BackButtonWrapper>
            {node.parent?<Button onClick={()=>{setNode(node.parent)}}>Back</Button>:null}
        </BackButtonWrapper>
        <FlexWrapper>
            {nodeList}
        </FlexWrapper>
        </>
        
    );
}

export default FileDir;