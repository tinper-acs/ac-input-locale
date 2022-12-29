import  React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Modal } from '@tinper/next-ui';

const propTypes = {
  onOk: PropTypes.func,//确定按钮钩子函数
  onCancel: PropTypes.func,//取消按钮钩子函数
  mask: PropTypes.bool,  //是否弹出遮罩层/遮罩层点击是否触发关闭
  title: PropTypes.string, // modal标题
  okName: PropTypes.string, // modal确认按钮中文字内容
  cancelName: PropTypes.string, // modal取消按钮中文字内容
  showModal: PropTypes.bool,  // 遮罩层显示
  close: PropTypes.func,// 关闭弹框钩子函数
}

const defaultProps = {
  classnames:'',
  mask: true,
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
      onCancel: props.onCancel,
      modalProps:props.modalProps
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
      close,
      modalProps
    } = nextProps

    const {
      title1,
      okName1,
      cancelName1,
      backdrop1,
      onOk1,
      onCancel1,
      showModal1,
      close1,
      modalProps1
    } = this.props

    if (title !== title1
      || okName !== okName1
      || cancelName !== cancelName1
      || backdrop !== backdrop1
      || onOk !== onOk1
      || onCancel !== onCancel1
      || showModal !== showModal1
      || modalProps !== modalProps1
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

  getFieldid = (name) => {
    const {modalProps} = this.state;
    const modalFieldid = modalProps && modalProps.fieldid;
    const fieldidName = modalFieldid ? `${modalFieldid}${name}` : undefined
    return fieldidName;
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
      close,
      modalProps
    } = this.state
    return (
      <Modal
        {...modalProps}
        visible = {showModal}
        width = '600'
        mask={backdrop}
        className="ac-input-locale-modal"
        onCancel = {
          close
        }
        destroyOnClose={true}
        enforceFocus={ false }
      >
        <Modal.Header closeButton={true} fieldid={this.getFieldid('_modal_header')}>
          <Modal.Title className="modal-title" fieldid={this.getFieldid('_modal_title')}>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body fieldid={this.getFieldid('_modal_body')}>
          {
            this.props.children
          }
        </Modal.Body>

        <Modal.Footer fieldid={this.getFieldid('_modal_footer')}>
          <Button bordered className="cancel-qx" onClick={onCancel} fieldid={this.getFieldid('_modal_footer_cancel')}>{cancelName}</Button>
          <Button colors="primary" onClick={onOk} fieldid={this.getFieldid('_modal_footer_ok')}>{okName}</Button>
        </Modal.Footer>
      </Modal>
    )

  }
}

ModalWrap.propTypes = propTypes;
ModalWrap.defaultProps = defaultProps;

export default ModalWrap;
