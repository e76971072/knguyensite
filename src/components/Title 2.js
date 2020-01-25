import React from 'react';

export default function  Title( props) {
    const titleName = props.titleName; 
    const index = props.index; 
    const size = props.size; 
   
    const styles = {
        h3: {
            fontSize: size, 
        }
    }
   
    return (
        <h3 style={styles.h3}> {index} <span> {titleName}</span> </h3>
    )
}