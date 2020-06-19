import React from 'react';
import 'antd/dist/antd.css';
import {Input, Tag} from 'antd';
import {TweenOneGroup} from 'rc-tween-one';

class EditableTagGroup extends React.Component <{ tagsContent: string[], onChange?: any }> {

    private input: any;

    constructor(props: any) {
        super(props);
        this.input = new Input(props);
    }

    handleClose = (removedTag: any) => {
        const tags = this.props.tagsContent.filter(tag => tag !== removedTag);
        this.props.onChange(tags);
    };

    showInput = () => {
        this.setState({inputVisible: true}, () => this.input.focus());
    };


    render() {
        const tags = this.props.tagsContent;
        return (
            <>
                <div style={{marginBottom: 16}}>
                    <TweenOneGroup
                        enter={{
                            scale: 0.8,
                            opacity: 0,
                            type: 'from',
                            duration: 100,
                            onComplete: (e: any) => {
                                e.target.style = '';
                            },
                        }}
                        leave={{opacity: 0, width: 0, scale: 0, duration: 200}}
                        appear={false}
                    >
                        {tags.map((tag, index) => (

                            tag.includes('_') ?
                                <span key={index + 1}>
                                    <h2> textg kokok</h2>
                               </span>
                                :
                                <span key={index + 1}>
                                    <Tag
                                        style={{display: 'inline-block'}}
                                        closable
                                        onClose={(e: any) => {
                                            e.preventDefault();
                                            this.handleClose(tag);
                                        }}
                                    >
                                        {tag}
                                </Tag>
                                </span>
                        ))}
                    </TweenOneGroup>
                </div>
            </>
        );
    }
}

export default EditableTagGroup;
