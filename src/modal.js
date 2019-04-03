import  React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Label, Col, Row,FormControl,Modal } from 'tinper-bee';

const propTypes = {
  onOk: PropTypes.func,//确定按钮钩子函数
  onCancel: PropTypes.func,//取消按钮钩子函数
  backdrop: PropTypes.bool,  //是否弹出遮罩层/遮罩层点击是否触发关闭
  title: PropTypes.string, // modal标题
  okName: PropTypes.string, // modal确认按钮中文字内容
  cancelName: PropTypes.string, // modal取消按钮中文字内容
  showModal: PropTypes.bool,  // 遮罩层显示
  close: PropTypes.func,// 关闭弹框钩子函数
}

const defaultProps = {
  classnames:'',
  backdrop: true,
}

class ModalWrap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: props.showModal,
      title: props.title,
      okName: props.okName,
      cancelName: props.cancelName,
      backdrop: props.backdrop,
      onOk: props.onOk,
      onCancel: props.onCancel
    }
  }

  componentWillReceiveProps(nextProps) {
    const {
      title,
      okName,
      cancelName,
      backdrop,
      onOk,
      onCancel,
      showModal,
      close
    } = nextProps

    const {
      title1,
      okName1,
      cancelName1,
      backdrop1,
      onOk1,
      onCancel1,
      showModal1,
      close1
    } = this.props

    if (title !== title1
      || okName !== okName1
      || cancelName !== cancelName1
      || backdrop !== backdrop1
      || onOk !== onOk1
      || onCancel !== onCancel1
      || showModal !== showModal1
      || close !== close1) {
        this.setState({
          title,
          okName,
          cancelName,
          backdrop,
          onOk,
          onCancel,
          showModal,
          close
        })
      }

  }

  render() {
    const {
      title,
      okName,
      cancelName,
      backdrop,
      onOk,
      onCancel,
      showModal,
      close
    } = this.state
    return (
      <Modal
        show = {showModal}
        width = '600'
        backdrop={backdrop}
        className="ac-input-locale-modal"
        onHide = {
          close
        }
        enforceFocus={ false }
      >
        <Modal.Header closeButton={true}>
          <Modal.Title className="modal-title">{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {
            this.props.children
          }
        </Modal.Body>

        <Modal.Footer>
          <Button bordered className="cancel-qx" onClick={onCancel}>{cancelName}</Button>
          <Button colors="primary" onClick={onOk}>{okName}</Button>
        </Modal.Footer>
      </Modal>
    )

  }
}

ModalWrap.propTypes = propTypes;
ModalWrap.defaultProps = defaultProps;

export default ModalWrap;
