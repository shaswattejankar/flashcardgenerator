import React from 'react';
import Modal from 'react-bootstrap/Modal';
import {LuCopyCheck} from 'react-icons/lu';
import {BsShare} from 'react-icons/bs';

// function to copy the url to clipboard and show a message when copied
function myFunction(){
  var text = document.querySelector("#myUrl");
  text.select();
  navigator.clipboard.writeText(text.value);
  alert("link copied!");  //to confirm that the link was successfully copied
}

export function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Share
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='row d-flex modal-row'>

        
      <div class="col-10 input-group mb-3">
        
        <div class="input-group-prepend">
          <span className="input-group-text" id="basic-addon1">link</span>
        </div>
      
          <input 
          type="text" 
          value={window.location.href} 
          className="link-input" 
          id="myUrl"
          aria-describedby='basic-addon1'
          readOnly/>
      
      </div>
      {/* <!-- The button used to copy the link --> */}
      <button 
            onClick={myFunction} 
            id="cpy-btn"
            className='col col-1 cs-btn'
            title='copy url'
            >
              <LuCopyCheck size={"1.3em"}/>
            </button>
            
            <button className='col col-1 cs-btn'><BsShare  size={"1.3em"}/></button>
</div>

      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  );
}


function CenterModal() {
  const [ShowModal, setShowModal] = React.useState(false);

  return (
    <>
        <button 
            onClick={()=>{
                setShowModal(true);
            }}
            className="util-button"
            variant="btn btn-primary primary"
            >
            Share
        </button>
      <MyVerticallyCenteredModal
        show={ShowModal}
        onHide={() => setShowModal(false)}
      />
    </>
  );
}
export default CenterModal;