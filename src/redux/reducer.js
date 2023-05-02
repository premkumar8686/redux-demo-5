const initial = 0;

export function myReducer(state = initial, action)
{
    switch(action.type)
    {
        case 'increment':
         return state + 1;
        case 'decrement':
         return state - 1;
        case 'reset':
         return state = 0;
        default:
         return state
    }
}