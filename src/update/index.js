export default {
  init: () => (model, subscriptions) => [{...model}, subscriptions.makeRequest()],
  decrement: () => model => ({...model, count: model.count - 1}),
  increment: () => model => ({...model, count: model.count + 1}),
  completeRequest: xhr => model => {
    console.log("Request Completed: ", xhr.responseText);
    return ({...model});
  },
}
