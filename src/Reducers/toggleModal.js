export const toggleModal = (toggleState = false, action) => {
  console.log('toggleState', toggleState)
  switch (action.type) {
    case 'TOGGLE_MODAL':
      return {
        toggleState: !action.toggleState
      }
    default:
      return toggleState
  }
}