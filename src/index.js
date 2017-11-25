import React from 'react';
import { render } from 'react-dom';

import { tieqviet } from './tieqviet';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const styleArea = {
  width: '100%',
  fontSize: 16,
  border: '1px solid black',
  padding: '5px',
  boxSizing: 'border-box',
  resize: 'none',
  outline: 'none',
  fontFamily: 'Arial',
  textAlign: 'left',
  whiteSpace: 'pre-line',
  height: '40vh',
  overflow: 'scroll'
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: `
LUẬT GIÁO DỤC <Điều 7. Ngôn ngữ dùng trong nhà trường và cơ sở giáo dục khác; dạy và học tiếng nói, chữ viết của dân tộc thiểu số; dạy ngoại ngữ.

1. Tiếng Việt là ngôn ngữ chíh thức dùng trong nhà trường và cơ sở giáo dục khác. Căn cứ vào mục tiêu giáo dục và yêu cầu cụ thể về nội dung giáo dục, Thủ tướg chíh phủ quy định việc dạy và học bằng tiếng nước ngoài trong nhà trường và cơ sở giáo dục khác.

2. Nhà nước tạo điều kiện để người dân tộc thiểu số được học tiếng nói, chữ viết của dân tộc mình nhằm giữ gìn và phát huy bản sắc văn hoá dân tộc, giúp cho học sinh người dân tộc thiểu số dễ dàng tiếp thu kiến thức khi học tập trong nhà trường và cơ sở giáo dục khác. Việc dạy và học tiếng nói, chữ viết của dân tộc thiểu số được thực hiện theo quy định của Chíh phủ.

3. Ngoại ngữ quy định trong chương trình giáo dục là ngôn ngữ được sử dụng phổ biến trong giao dịch quốc tế. Việc tổ chức dạy ngoại ngữ trong nhà trường và cơ sở giáo dục khác cần đảm bảo để người học được học liên tục và có hiệu quả.
`
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return <div style={styles}>
      <div>
        <h3>Tiếng Việt </h3>
        <textarea style={styleArea} value={this.state.value} onChange={this.handleChange} />
        <a href='http://vi.blogtamsu.com/khi-tieng-viet-duoc-viet-thanh-tieq-viet.html'><h3>{tieqviet('Tiếng Việt')} </h3></a>
        <div style={styleArea}>{tieqviet(this.state.value)}</div>
      </div>
      <h4>@netcell</h4>
    </div>
  }
};

render(<App />, document.getElementById('root'));