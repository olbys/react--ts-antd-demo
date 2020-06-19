import React from "react";
import {Button, Form, Input} from 'antd';
import {CheckCircleOutlined, CloseOutlined} from '@ant-design/icons';
import '../../App.css';


const tailLayout = {
    wrapperCol: {offset: 0, span: 16},
};

class TextEditor extends React.Component<{ onEdit: any }> {
    state = {textContent: ''};

    onFinish = (values: any) => {
        console.log('Success:', values);
        console.log(this.state.textContent);
    };

    onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    render(): React.ReactNode {
        return (
            <Form
                labelCol={{span: 0}}
                wrapperCol={{span: 24}}
                name="basic"
                initialValues={{remember: true}}
                onFinish={this.onFinish}
                onFinishFailed={this.onFinishFailed}
            >
                <Form.Item
                    style={{width: '100%'}}
                    name="texarea"
                    rules={[{required: true, message: 'entrez un texte svp !'}]}
                >
                    <Input.TextArea onChange={this.props.onEdit} className={'ml-2'} style={{minHeight: '200px'}}/>
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" size={'large'} className={'mr-3'}
                            htmlType="submit" icon={<CheckCircleOutlined/>}
                    />
                    <Button type="ghost" size={'large'} className={'ml-3'}
                            icon={<CloseOutlined/>}/>
                </Form.Item>
            </Form>

        );
    }

}

export default TextEditor;
