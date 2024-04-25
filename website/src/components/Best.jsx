import React from 'react';
import data from '../data.js';
import CustomButton from '../CustomButton.jsx';
import Footer from '../layout/Footer';

function Best() {
  const libs = data; // 데이터 가져오기

  // 배열을 chunk로 나누는 함수
  const chunkArray = (arr, size) => {
    const chunkedArr = [];
    for (let i = 0; i < arr.length; i += size) {
      chunkedArr.push(arr.slice(i, i + size));
    }
    return chunkedArr;
  };

  return (
    <div>
      <div className="container">
        <h1 className="my-3 text-center">Best</h1>
        <div className="row text-dark">
          {chunkArray(libs.slice(0, 8), 4).map((group, index) => (
            <div key={index} className="row">
              {group.map((lib, idx) => (
                <Card key={idx} lib={lib} image={lib.image} />
              ))}
            </div>
          ))}
        </div>
      </div>
      <div style={{ marginTop: '50px' }} /> 
      <Footer/>
    </div>
  );
}

function Card(props) {
  return (
    <div className="col-md-3 text-center"> {/* 한 줄에 4개씩 배치하기 위해 col-md-3 사용 */}
      <img src={props.image} width="50%" alt="lib" />
      <h5>{props.lib.title}</h5>
      <h6>{props.lib.price}</h6>
      <CustomButton text="Buy" />
    </div>
  );
}

export default Best;
