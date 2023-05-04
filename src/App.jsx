import {Data} from "./Data"
import Board from './Board'
console.log(Data);
const App = () => {
    const boxElem = Data.map(item => <Board key={item.id} {...item} />)
    return (
        <div className="container">
            {boxElem}
        </div>
    )
}

export default App;