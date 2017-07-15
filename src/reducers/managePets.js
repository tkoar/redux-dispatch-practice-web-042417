export let state;


export function managePets(state = {pets: []}, action) {
    switch (action.type) {
      case 'ADD_PET':
        return Object.assign({}, state, {pets: [...state.pets, action.pet]})
        break;
      case 'REMOVE_PET':
        // const pets = state.pets
        // const petIndexToRemove = pets.findIndex(el => el.id === action.id)
        // const beginningPets = pets.slice(0, removeIndex)
        // const endingPets = pets.slice(removeIndex + 1)
        const newPetsarr = findAndRemove(action, state)
        return {
        ...state,
        pets: newPetsarr
        }
        break;
      default:
      return state
    }
  }

export const dispatch = (action) => {
  state = managePets(state, action)
  render()
}

export const render = () => {
  let container = document.getElementById('container');
  let petsList = state.pets.map((pet) => {
    return `<li>${pet.name}</li>`;
  }).join(' ');
  container.innerHTML = `<ul>${petsList}</ul>`;
}


export const findAndRemove = (action, state = {pets: []}) => {
  var prop = action.type.split("_")[1]
  prop = prop.toLowerCase()
  const arr = state[`${prop}s`]
  const objIndexToRemove = arr.findIndex(el => el.id === action.id)
  const beginningObjs = arr.slice(0, objIndexToRemove)
  const endingObjs = arr.slice(objIndexToRemove + 1)
  return [...beginningObjs, ...endingObjs]
}
