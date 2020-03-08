import React from 'react'
import { Button, Form, Input} from 'antd';

const { TextArea } = Input;

function UploadProductPage() {
    return (
        <div style={{ maxWidth:'700px', margin:'2rem auto' }}>
            <div style={{ fontFamily: 'monospace',textAlign: 'center', marginBottom:'2rem', fontWeight: '1000'}}>
                {/* italic 이탤릭체로 보여줍니다. oblique 기울임꼴로 보여줍니다. fontStyle: 'oblique'*/}
                {/* 세리프(serif) - 꺽쇠가 있는 서체, 가독성을 보다 높여 줌.
                    산세리프(sans-serif) - 꺽쇠가 없는 서체, 심플하고 깔끔한 서체.
                    모노스페이스(monospace) - 글자들의 너비가 동일한 서체, 코딩 작업 등에 주로 사용.
                    커시브(cursive) - 필기체.
                    판타지(fantasy) - 장식이 많은 서체, 제목 같은 일부 영역에 유용. */}
                <h2> Upload Travel Product</h2>
            </div>


            <Form onSubmit >

                {/* DropZone */}


                <br />
                <br />
                <label>Title</label>
                <Input
                    onChange
                    value
                />
                <br />
                <br />
                <label>Description</label>
                <TextArea
                    onChange
                    value
                />
                <br />
                <br />
                <label>Price($)</label>
                <Input
                    onChange
                    value
                    type="number"
                />
                <br /><br />
                <select>
                    <option key value>

                    </option>
               
                </select>
                <br />
                <br />

                <Button
                    onClick
                >
                    Submit
                </Button>

            </Form>

        </div>
    )
}

export default UploadProductPage
