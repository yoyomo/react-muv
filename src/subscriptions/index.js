export default {
  makeRequest: () => (dispatch, actions) => {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:1234", true);

    xhr.onload = () => {
      dispatch(actions.completeRequest(xhr));
    };

    xhr.setRequestHeader('Accept', 'application/json');
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.send({});
    return;
  }
}
