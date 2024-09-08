import { initialCartState } from "./ActionsAndStateCart";


export const CartReducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action;

  switch (actionType) {

    case 'ADD_TO_CART': {
      const { id } = actionPayload;

      const productoEnCart = state.findIndex(item => item.id == id)

      if (productoEnCart >= 0) {
        //antes llamado newCart (se cambió el nombre para poder teenr mejor contxto al estar tranbajanmdo en un reducer y con estados)
        const newState = structuredClone(state);
        newState[productoEnCart].quantity += 1;
        return newState
      } else {
        //antes tenia un setCart pero todos los set cart ahora estan siendo cambiado a un return con el estado nuevo
        return [...state,
        {
          ...actionPayload, //producto
          quantity: 1,
        }
        ];
      }
    };

    case 'REMOVE_FROM_CART': {
      const { id } = actionPayload;
      return state.filter(item => item.id != id);

    };

    case 'CLEAR_CART': {
      return initialCartState;
    };
  }

  return state
}


