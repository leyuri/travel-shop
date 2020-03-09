import React, { useState } from 'react'
import { Checkbox, Collapse } from 'antd';

const { Panel } = Collapse

const continents = [
    {
        "_id": 1,
        "name": "Africa"
    },
    {
        "_id": 2,
        "name": "Europe"
    },
    {
        "_id": 3,
        "name": "Asia"
    },
    {
        "_id": 4,
        "name": "North America"
    },
    {
        "_id": 5,
        "name": "South America"
    },
    {
        "_id": 6,
        "name": "Australia"
    },
    {
        "_id": 7,
        "name": "Antarctica"
    }
]

function CheckBox() {

    const [Checked, setChecked] = useState([])

    const handleToggle = (value) => {

        Checked: [1,2,3]
        Checked: [1,2,3,4]

        const currentIndex = Checked.indexOf(value);
        //output = -1 이 나왔다는 것은 checked 되지 않음을 의미함
        //아직 없을 경우에
        // indexOf -1 , 0, 1, 2, 3
        const newChecked = [...Checked];

        if (currentIndex === -1) {
            newChecked.push(value)
        } else {
            newChecked.splice(currentIndex, 1)
            //체크가 되어있는 상황이라면?
            //splice 는 배열에서 특정 범위의 값들을 추출하고, 그 자리에 새로운 값을 넣는다
            //array.splice(index, howmany, element1, ...., elementN);
            //index:배열에 추가할 특정 배열의 위치를 가르키는 index, howmany:
            // index에서부터 제거될 원소들의 수. index부터 index+howmany에 해당하는 원소들은 삭제된다. 이 값이 0이면 어떠한 원소도 삭제되지 않는다.
        }

        setChecked(newChecked)
        props.handleFilters(newChecked)
        //update this checked information into Parent Component 

    }


    const renderCheckboxLists = () => continents.map((value, index) => (
        <React.Fragment key={index}>
            <Checkbox
                onChange={()=>handleToggle(value._id)}
                type="checkbox"
                checked
            />&nbsp;&nbsp;
            <span>{value.name}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </React.Fragment>
    ))


    return (
        <div>
            <Collapse defaultActiveKey={['0']} >
                <Panel header="Continents" key="1">
                    {renderCheckboxLists()}
                </Panel>
            </Collapse>
        </div>
    )
}

export default CheckBox
