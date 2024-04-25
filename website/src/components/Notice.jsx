import React, { useState } from 'react';
import '../css/Notice.css';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import ReactHtmlParser from 'react-html-parser';
import Footer from '../layout/Footer';

function Notice(){
    const [noticeContent, setNoticeContent] = useState({
        title: '',
        content: ''
      })

      const [viewContent, setViewContent] = useState([]); //입력누르면 내용업데이트 , 각각적힌 내용들을 저장해줌

      const getValue = e => {
        const { name, value } = e.target;
        setNoticeContent({
            ...noticeContent,
            [name]: value
        })
        console.log(noticeContent);
    }; //이벤트가 발생하면 그 이벤트의 name과 value를 가지고오는역할

    return(
        <div>
            <div className="notice my-3">
            <h1>Notice</h1>
            <div className="notice-container">
                {viewContent.map((element, index) => (
                <div key={index}>
                    <h2>{element.title}</h2>
                    <div>
                        {ReactHtmlParser(element.content)}
                    </div>
                </div>
                ))}
        </div>
        <div className="notice-form-wrapper">
            <input className="notice-title-input" type="text" placeholder="제목" onChange={getValue} name='title'/>
            <CKEditor
          editor={ClassicEditor}
          data="<p>Hello from CKEditor 5!</p>"
          onReady={editor => {
            // You can store the "editor" and use when it is needed.
            console.log('Editor is ready to use!', editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            console.log({ event, editor, data });
            setNoticeContent({
                ...noticeContent,
                content:data
            })
            console.log(noticeContent);
          }}
          onBlur={(event, editor) => {
            console.log('Blur.', editor);
          }}
          onFocus={(event, editor) => {
            console.log('Focus.', editor);
          }}
        />
        </div>
        <button className="notice-sumbit-button"
        onClick={() => {
            setViewContent(viewContent.concat({...noticeContent}));
        }}>입력</button>
        </div>
        <Footer />
        </div>
    )
}

export default Notice;