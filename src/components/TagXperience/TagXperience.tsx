import React from 'react';
import styles from './TagXperience.module.css';
import {Row, Col, Button, Drawer, Typography} from 'antd';
import {HighlightOutlined} from '@ant-design/icons';
import TextEditor from "./TextEditor";
import EditableTagGroup from "./EditableTagGroup";

const {Title} = Typography;

class TagXperience extends React.Component {

    constructor(props: any) {
        super(props);
    }

    state = {
        visible: false, textContent: '',
        tags: ['tag 1', 'tag 2', 'tag 3'],
        prevText:''
    };


    handleTag = (tagsUpdate: string[]) => {
        this.setState({
            tags: tagsUpdate,
        }, () => console.log(this.state.tags));
    }

    onEdit = (e: any): string[] => {
        this.setState({
            textContent: e.target.value,
        }, () => (this.handleTag(this.state.textContent.split(' '))))
        return this.state.tags;
    }

    onChange = (tagsUpate: string []) => {
        this.setState({
            tags: tagsUpate
        })
    }

    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };

    render(): React.ReactNode {
        const {visible} = this.state;
        return (
            <div className={styles.TagXperience}>
                <Row>
                    <Col span={6} offset={20}>
                        <Button type={"primary"} icon={<HighlightOutlined/>}
                                onClick={this.showDrawer}>Ajouter un text</Button>
                    </Col>
                </Row>
                <Row gutter={24}>
                    <Col span={24}>
                        TagXperience Component
                        <EditableTagGroup tagsContent={this.state.tags} onChange={this.onChange}/>
                    </Col>
                </Row>

                <Drawer
                    width={500}
                    title={<Title level={3}> Tapez le texte</Title>}
                    placement={'right'}
                    closable={false}
                    onClose={this.onClose}
                    visible={visible}
                >
                    <Row gutter={24}>
                        <Col span={24}>
                            <TextEditor onEdit={this.onEdit}/>
                        </Col>
                    </Row>
                </Drawer>
            </div>
        );
    }

}


export default TagXperience;
