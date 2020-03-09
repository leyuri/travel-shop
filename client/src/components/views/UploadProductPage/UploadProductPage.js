import React, {useState} from 'react'
import { Typography, Button, Form, message, Input, Icon } from 'antd';
import FileUpload from '../../utils/FileUpload';
import Axios from 'axios';
import { response } from 'express';

const { Title } = Typography;
const { TextArea } = Input;
const Continents = [
    { key: 1, value: "Africa" },
    { key: 2, value: "Europe" },
    { key: 3, value: "Asia" },
    { key: 4, value: "North America" },
    { key: 5, value: "South America" },
    { key: 6, value: "Australia" },
    { key: 7, value: "Antarctica" }
]


function UploadProductPage(props) {

    const [TitleValue, setTitleValue] = useState("")
    const [DescriptionValue, setDescriptionValue] = useState("")
    const [PriceValue, setPriceValue] = useState(0)
    const [ContinentValue, setContinentValue] = useState(1)

    const [Images, setImages] = useState([])

    const onTitleChange = (e) => {
        setTitleValue(e.currentTarget.value)
    }


    const onDescriptionChange = (e) => {
        setDescriptionValue(e.currentTarget.value)
    }

    const onPriceChange = (e) => {
        setPriceValue(e.currentTarget.value)
    }

    const onContinentsSelectChange = (e) => {
        setContinentValue(e.currentTarget.value)
    }

    const updateImages = (newImages) => {

        console.log(newImages)
        setImages(newImages)
    }

    const onSubmit = (e) => {
        e.preventDefault();

        const variables = {
            writer: props.user.userData._id,
            title: TitleValue,
            description: DescriptionValue,
            price: PriceValue,
            images: Images,
            continents: Continents

        }
        Axios.post('/api/product/uploadProduct', variables)
        .then(response => {
            if(response.data.success) {

            }else {
                alert('Failed to upload Product')
            }
        })
    }





    return (
        <div style={{ maxWidth:'700px', margin:'2rem auto' }}>
            <div style={{ fontFamily: 'monospace',textAlign: 'center', marginBottom:'2rem', fontWeight: '1000'}}>
                {/* italic 이탤릭체로 보여줍니다. oblique 기울임꼴로 보여줍니다. fontStyle: 'oblique'*/}
                {/* 세리프(serif) - 꺽쇠가 있는 서체, 가독성을 보다 높여 줌.
                    산세리프(sans-serif) - 꺽쇠가 없는 서체, 심플하고 깔끔한 서체.
                    모노스페이스(monospace) - 글자들의 너비가 동일한 서체, 코딩 작업 등에 주로 사용.
                    커시브(cursive) - 필기체.
                    판타지(fantasy) - 장식이 많은 서체, 제목 같은 일부 영역에 유용. */}
                <Title level={2}> Upload Travel Product</Title>
            </div>


            <Form onSubmit={onSubmit} >

                {/* DropZone */}

                
                <FileUpload refreshFunction={updateImages} />
                <br />
                <br />
                <label>Title</label>
                <Input
                    onChange={onTitleChange}
                    value={TitleValue}
                />
                <br />
                <br />
                <label>Description</label>
                <TextArea
                    onChange={onDescriptionChange}
                    value={DescriptionValue}
                />
                <br />
                <br />
                <label>Price($)</label>
                <Input
                    onChange={onPriceChange}
                    value={PriceValue}
                    type="number"
                />
                <br /><br />
                <select onChange={onContinentsSelectChange}>
                {Continents.map(item => (
                        <option key={item.key} value={item.key}>{item.value} </option>
                    ))}
                </select>
                <br />
                <br />

                <Button
                    onClick={onSubmit}>
                    Submit
                </Button>

            </Form>

        </div>
    )
}

export default UploadProductPage
