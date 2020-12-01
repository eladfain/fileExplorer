import entities from "../enteties/enteties";

const node=(name,parent)=>{
    return{
        name:name,
        children:[],
        parent:parent
    }
}

const findInTree=(currentNode,name)=>{
    let children=currentNode.children;
    let node=children.filter(e=>e.name===name);
    if(node.length) return node[0];
    else return null;
}

const createTree=()=>{
    let rootNode=node("root",null);
    for(let i=0;i<entities.length;i++){
        let ids=entities[i].id;
        let idparts=ids.split(":");
        let currentNode=rootNode;
        for(let j=0;j<idparts.length;j++){
            let nodeName=idparts[j].trim();
            let findNode=findInTree(currentNode,nodeName);
            if(!findNode){
                let newNode=node(nodeName,currentNode);
                currentNode.children.push(newNode);
                currentNode=newNode;
            }
            else{
                currentNode=findNode;
            }

        }
    }
    return rootNode;
}

export default createTree;