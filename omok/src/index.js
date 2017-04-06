import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';


function Square(props) {
    return (
        <button className="square" onClick={()=>props.onClick()}>
            {props.value}
        </button>
    );
}


class Board extends React.Component {
    render() {
        return (
            <div>
            <div className="status">{status}</div>

            <div className="board-row">
            <Square y={0} x={0} value={this.props.squares[0][0]} onClick={() => this.props.onClick(0,0)}/>
            <Square y={0} x={1} value={this.props.squares[0][1]} onClick={() => this.props.onClick(0,1)}/>
            <Square y={0} x={2} value={this.props.squares[0][2]} onClick={() => this.props.onClick(0,2)}/>
            <Square y={0} x={3} value={this.props.squares[0][3]} onClick={() => this.props.onClick(0,3)}/>
            <Square y={0} x={4} value={this.props.squares[0][4]} onClick={() => this.props.onClick(0,4)}/>
            <Square y={0} x={5} value={this.props.squares[0][5]} onClick={() => this.props.onClick(0,5)}/>
            <Square y={0} x={6} value={this.props.squares[0][6]} onClick={() => this.props.onClick(0,6)}/>
            <Square y={0} x={7} value={this.props.squares[0][7]} onClick={() => this.props.onClick(0,7)}/>
            <Square y={0} x={8} value={this.props.squares[0][8]} onClick={() => this.props.onClick(0,8)}/>
            <Square y={0} x={9} value={this.props.squares[0][9]} onClick={() => this.props.onClick(0,9)}/>
            <Square y={0} x={10} value={this.props.squares[0][10]} onClick={() => this.props.onClick(0,10)}/>
            <Square y={0} x={11} value={this.props.squares[0][11]} onClick={() => this.props.onClick(0,11)}/>
            <Square y={0} x={12} value={this.props.squares[0][12]} onClick={() => this.props.onClick(0,12)}/>
            <Square y={0} x={13} value={this.props.squares[0][13]} onClick={() => this.props.onClick(0,13)}/>
            <Square y={0} x={14} value={this.props.squares[0][14]} onClick={() => this.props.onClick(0,14)}/>
            <Square y={0} x={15} value={this.props.squares[0][15]} onClick={() => this.props.onClick(0,15)}/>
            <Square y={0} x={16} value={this.props.squares[0][16]} onClick={() => this.props.onClick(0,16)}/>
            <Square y={0} x={17} value={this.props.squares[0][17]} onClick={() => this.props.onClick(0,17)}/>
            <Square y={0} x={18} value={this.props.squares[0][18]} onClick={() => this.props.onClick(0,18)}/>
            </div>
            <div className="board-row">
            <Square y={1} x={0} value={this.props.squares[1][0]} onClick={() => this.props.onClick(1,0)}/>
            <Square y={1} x={1} value={this.props.squares[1][1]} onClick={() => this.props.onClick(1,1)}/>
            <Square y={1} x={2} value={this.props.squares[1][2]} onClick={() => this.props.onClick(1,2)}/>
            <Square y={1} x={3} value={this.props.squares[1][3]} onClick={() => this.props.onClick(1,3)}/>
            <Square y={1} x={4} value={this.props.squares[1][4]} onClick={() => this.props.onClick(1,4)}/>
            <Square y={1} x={5} value={this.props.squares[1][5]} onClick={() => this.props.onClick(1,5)}/>
            <Square y={1} x={6} value={this.props.squares[1][6]} onClick={() => this.props.onClick(1,6)}/>
            <Square y={1} x={7} value={this.props.squares[1][7]} onClick={() => this.props.onClick(1,7)}/>
            <Square y={1} x={8} value={this.props.squares[1][8]} onClick={() => this.props.onClick(1,8)}/>
            <Square y={1} x={9} value={this.props.squares[1][9]} onClick={() => this.props.onClick(1,9)}/>
            <Square y={1} x={10} value={this.props.squares[1][10]} onClick={() => this.props.onClick(1,10)}/>
            <Square y={1} x={11} value={this.props.squares[1][11]} onClick={() => this.props.onClick(1,11)}/>
            <Square y={1} x={12} value={this.props.squares[1][12]} onClick={() => this.props.onClick(1,12)}/>
            <Square y={1} x={13} value={this.props.squares[1][13]} onClick={() => this.props.onClick(1,13)}/>
            <Square y={1} x={14} value={this.props.squares[1][14]} onClick={() => this.props.onClick(1,14)}/>
            <Square y={1} x={15} value={this.props.squares[1][15]} onClick={() => this.props.onClick(1,15)}/>
            <Square y={1} x={16} value={this.props.squares[1][16]} onClick={() => this.props.onClick(1,16)}/>
            <Square y={1} x={17} value={this.props.squares[1][17]} onClick={() => this.props.onClick(1,17)}/>
            <Square y={1} x={18} value={this.props.squares[1][18]} onClick={() => this.props.onClick(1,18)}/>
            </div>
            <div className="board-row">
            <Square y={2} x={0} value={this.props.squares[2][0]} onClick={() => this.props.onClick(2,0)}/>
            <Square y={2} x={1} value={this.props.squares[2][1]} onClick={() => this.props.onClick(2,1)}/>
            <Square y={2} x={2} value={this.props.squares[2][2]} onClick={() => this.props.onClick(2,2)}/>
            <Square y={2} x={3} value={this.props.squares[2][3]} onClick={() => this.props.onClick(2,3)}/>
            <Square y={2} x={4} value={this.props.squares[2][4]} onClick={() => this.props.onClick(2,4)}/>
            <Square y={2} x={5} value={this.props.squares[2][5]} onClick={() => this.props.onClick(2,5)}/>
            <Square y={2} x={6} value={this.props.squares[2][6]} onClick={() => this.props.onClick(2,6)}/>
            <Square y={2} x={7} value={this.props.squares[2][7]} onClick={() => this.props.onClick(2,7)}/>
            <Square y={2} x={8} value={this.props.squares[2][8]} onClick={() => this.props.onClick(2,8)}/>
            <Square y={2} x={9} value={this.props.squares[2][9]} onClick={() => this.props.onClick(2,9)}/>
            <Square y={2} x={10} value={this.props.squares[2][10]} onClick={() => this.props.onClick(2,10)}/>
            <Square y={2} x={11} value={this.props.squares[2][11]} onClick={() => this.props.onClick(2,11)}/>
            <Square y={2} x={12} value={this.props.squares[2][12]} onClick={() => this.props.onClick(2,12)}/>
            <Square y={2} x={13} value={this.props.squares[2][13]} onClick={() => this.props.onClick(2,13)}/>
            <Square y={2} x={14} value={this.props.squares[2][14]} onClick={() => this.props.onClick(2,14)}/>
            <Square y={2} x={15} value={this.props.squares[2][15]} onClick={() => this.props.onClick(2,15)}/>
            <Square y={2} x={16} value={this.props.squares[2][16]} onClick={() => this.props.onClick(2,16)}/>
            <Square y={2} x={17} value={this.props.squares[2][17]} onClick={() => this.props.onClick(2,17)}/>
            <Square y={2} x={18} value={this.props.squares[2][18]} onClick={() => this.props.onClick(2,18)}/>
            </div>
            <div className="board-row">
            <Square y={3} x={0} value={this.props.squares[3][0]} onClick={() => this.props.onClick(3,0)}/>
            <Square y={3} x={1} value={this.props.squares[3][1]} onClick={() => this.props.onClick(3,1)}/>
            <Square y={3} x={2} value={this.props.squares[3][2]} onClick={() => this.props.onClick(3,2)}/>
            <Square y={3} x={3} value={this.props.squares[3][3]} onClick={() => this.props.onClick(3,3)}/>
            <Square y={3} x={4} value={this.props.squares[3][4]} onClick={() => this.props.onClick(3,4)}/>
            <Square y={3} x={5} value={this.props.squares[3][5]} onClick={() => this.props.onClick(3,5)}/>
            <Square y={3} x={6} value={this.props.squares[3][6]} onClick={() => this.props.onClick(3,6)}/>
            <Square y={3} x={7} value={this.props.squares[3][7]} onClick={() => this.props.onClick(3,7)}/>
            <Square y={3} x={8} value={this.props.squares[3][8]} onClick={() => this.props.onClick(3,8)}/>
            <Square y={3} x={9} value={this.props.squares[3][9]} onClick={() => this.props.onClick(3,9)}/>
            <Square y={3} x={10} value={this.props.squares[3][10]} onClick={() => this.props.onClick(3,10)}/>
            <Square y={3} x={11} value={this.props.squares[3][11]} onClick={() => this.props.onClick(3,11)}/>
            <Square y={3} x={12} value={this.props.squares[3][12]} onClick={() => this.props.onClick(3,12)}/>
            <Square y={3} x={13} value={this.props.squares[3][13]} onClick={() => this.props.onClick(3,13)}/>
            <Square y={3} x={14} value={this.props.squares[3][14]} onClick={() => this.props.onClick(3,14)}/>
            <Square y={3} x={15} value={this.props.squares[3][15]} onClick={() => this.props.onClick(3,15)}/>
            <Square y={3} x={16} value={this.props.squares[3][16]} onClick={() => this.props.onClick(3,16)}/>
            <Square y={3} x={17} value={this.props.squares[3][17]} onClick={() => this.props.onClick(3,17)}/>
            <Square y={3} x={18} value={this.props.squares[3][18]} onClick={() => this.props.onClick(3,18)}/>
            </div>
            <div className="board-row">
            <Square y={4} x={0} value={this.props.squares[4][0]} onClick={() => this.props.onClick(4,0)}/>
            <Square y={4} x={1} value={this.props.squares[4][1]} onClick={() => this.props.onClick(4,1)}/>
            <Square y={4} x={2} value={this.props.squares[4][2]} onClick={() => this.props.onClick(4,2)}/>
            <Square y={4} x={3} value={this.props.squares[4][3]} onClick={() => this.props.onClick(4,3)}/>
            <Square y={4} x={4} value={this.props.squares[4][4]} onClick={() => this.props.onClick(4,4)}/>
            <Square y={4} x={5} value={this.props.squares[4][5]} onClick={() => this.props.onClick(4,5)}/>
            <Square y={4} x={6} value={this.props.squares[4][6]} onClick={() => this.props.onClick(4,6)}/>
            <Square y={4} x={7} value={this.props.squares[4][7]} onClick={() => this.props.onClick(4,7)}/>
            <Square y={4} x={8} value={this.props.squares[4][8]} onClick={() => this.props.onClick(4,8)}/>
            <Square y={4} x={9} value={this.props.squares[4][9]} onClick={() => this.props.onClick(4,9)}/>
            <Square y={4} x={10} value={this.props.squares[4][10]} onClick={() => this.props.onClick(4,10)}/>
            <Square y={4} x={11} value={this.props.squares[4][11]} onClick={() => this.props.onClick(4,11)}/>
            <Square y={4} x={12} value={this.props.squares[4][12]} onClick={() => this.props.onClick(4,12)}/>
            <Square y={4} x={13} value={this.props.squares[4][13]} onClick={() => this.props.onClick(4,13)}/>
            <Square y={4} x={14} value={this.props.squares[4][14]} onClick={() => this.props.onClick(4,14)}/>
            <Square y={4} x={15} value={this.props.squares[4][15]} onClick={() => this.props.onClick(4,15)}/>
            <Square y={4} x={16} value={this.props.squares[4][16]} onClick={() => this.props.onClick(4,16)}/>
            <Square y={4} x={17} value={this.props.squares[4][17]} onClick={() => this.props.onClick(4,17)}/>
            <Square y={4} x={18} value={this.props.squares[4][18]} onClick={() => this.props.onClick(4,18)}/>
            </div>
            <div className="board-row">
            <Square y={5} x={0} value={this.props.squares[5][0]} onClick={() => this.props.onClick(5,0)}/>
            <Square y={5} x={1} value={this.props.squares[5][1]} onClick={() => this.props.onClick(5,1)}/>
            <Square y={5} x={2} value={this.props.squares[5][2]} onClick={() => this.props.onClick(5,2)}/>
            <Square y={5} x={3} value={this.props.squares[5][3]} onClick={() => this.props.onClick(5,3)}/>
            <Square y={5} x={4} value={this.props.squares[5][4]} onClick={() => this.props.onClick(5,4)}/>
            <Square y={5} x={5} value={this.props.squares[5][5]} onClick={() => this.props.onClick(5,5)}/>
            <Square y={5} x={6} value={this.props.squares[5][6]} onClick={() => this.props.onClick(5,6)}/>
            <Square y={5} x={7} value={this.props.squares[5][7]} onClick={() => this.props.onClick(5,7)}/>
            <Square y={5} x={8} value={this.props.squares[5][8]} onClick={() => this.props.onClick(5,8)}/>
            <Square y={5} x={9} value={this.props.squares[5][9]} onClick={() => this.props.onClick(5,9)}/>
            <Square y={5} x={10} value={this.props.squares[5][10]} onClick={() => this.props.onClick(5,10)}/>
            <Square y={5} x={11} value={this.props.squares[5][11]} onClick={() => this.props.onClick(5,11)}/>
            <Square y={5} x={12} value={this.props.squares[5][12]} onClick={() => this.props.onClick(5,12)}/>
            <Square y={5} x={13} value={this.props.squares[5][13]} onClick={() => this.props.onClick(5,13)}/>
            <Square y={5} x={14} value={this.props.squares[5][14]} onClick={() => this.props.onClick(5,14)}/>
            <Square y={5} x={15} value={this.props.squares[5][15]} onClick={() => this.props.onClick(5,15)}/>
            <Square y={5} x={16} value={this.props.squares[5][16]} onClick={() => this.props.onClick(5,16)}/>
            <Square y={5} x={17} value={this.props.squares[5][17]} onClick={() => this.props.onClick(5,17)}/>
            <Square y={5} x={18} value={this.props.squares[5][18]} onClick={() => this.props.onClick(5,18)}/>
            </div>
            <div className="board-row">
            <Square y={6} x={0} value={this.props.squares[6][0]} onClick={() => this.props.onClick(6,0)}/>
            <Square y={6} x={1} value={this.props.squares[6][1]} onClick={() => this.props.onClick(6,1)}/>
            <Square y={6} x={2} value={this.props.squares[6][2]} onClick={() => this.props.onClick(6,2)}/>
            <Square y={6} x={3} value={this.props.squares[6][3]} onClick={() => this.props.onClick(6,3)}/>
            <Square y={6} x={4} value={this.props.squares[6][4]} onClick={() => this.props.onClick(6,4)}/>
            <Square y={6} x={5} value={this.props.squares[6][5]} onClick={() => this.props.onClick(6,5)}/>
            <Square y={6} x={6} value={this.props.squares[6][6]} onClick={() => this.props.onClick(6,6)}/>
            <Square y={6} x={7} value={this.props.squares[6][7]} onClick={() => this.props.onClick(6,7)}/>
            <Square y={6} x={8} value={this.props.squares[6][8]} onClick={() => this.props.onClick(6,8)}/>
            <Square y={6} x={9} value={this.props.squares[6][9]} onClick={() => this.props.onClick(6,9)}/>
            <Square y={6} x={10} value={this.props.squares[6][10]} onClick={() => this.props.onClick(6,10)}/>
            <Square y={6} x={11} value={this.props.squares[6][11]} onClick={() => this.props.onClick(6,11)}/>
            <Square y={6} x={12} value={this.props.squares[6][12]} onClick={() => this.props.onClick(6,12)}/>
            <Square y={6} x={13} value={this.props.squares[6][13]} onClick={() => this.props.onClick(6,13)}/>
            <Square y={6} x={14} value={this.props.squares[6][14]} onClick={() => this.props.onClick(6,14)}/>
            <Square y={6} x={15} value={this.props.squares[6][15]} onClick={() => this.props.onClick(6,15)}/>
            <Square y={6} x={16} value={this.props.squares[6][16]} onClick={() => this.props.onClick(6,16)}/>
            <Square y={6} x={17} value={this.props.squares[6][17]} onClick={() => this.props.onClick(6,17)}/>
            <Square y={6} x={18} value={this.props.squares[6][18]} onClick={() => this.props.onClick(6,18)}/>
            </div>
            <div className="board-row">
            <Square y={7} x={0} value={this.props.squares[7][0]} onClick={() => this.props.onClick(7,0)}/>
            <Square y={7} x={1} value={this.props.squares[7][1]} onClick={() => this.props.onClick(7,1)}/>
            <Square y={7} x={2} value={this.props.squares[7][2]} onClick={() => this.props.onClick(7,2)}/>
            <Square y={7} x={3} value={this.props.squares[7][3]} onClick={() => this.props.onClick(7,3)}/>
            <Square y={7} x={4} value={this.props.squares[7][4]} onClick={() => this.props.onClick(7,4)}/>
            <Square y={7} x={5} value={this.props.squares[7][5]} onClick={() => this.props.onClick(7,5)}/>
            <Square y={7} x={6} value={this.props.squares[7][6]} onClick={() => this.props.onClick(7,6)}/>
            <Square y={7} x={7} value={this.props.squares[7][7]} onClick={() => this.props.onClick(7,7)}/>
            <Square y={7} x={8} value={this.props.squares[7][8]} onClick={() => this.props.onClick(7,8)}/>
            <Square y={7} x={9} value={this.props.squares[7][9]} onClick={() => this.props.onClick(7,9)}/>
            <Square y={7} x={10} value={this.props.squares[7][10]} onClick={() => this.props.onClick(7,10)}/>
            <Square y={7} x={11} value={this.props.squares[7][11]} onClick={() => this.props.onClick(7,11)}/>
            <Square y={7} x={12} value={this.props.squares[7][12]} onClick={() => this.props.onClick(7,12)}/>
            <Square y={7} x={13} value={this.props.squares[7][13]} onClick={() => this.props.onClick(7,13)}/>
            <Square y={7} x={14} value={this.props.squares[7][14]} onClick={() => this.props.onClick(7,14)}/>
            <Square y={7} x={15} value={this.props.squares[7][15]} onClick={() => this.props.onClick(7,15)}/>
            <Square y={7} x={16} value={this.props.squares[7][16]} onClick={() => this.props.onClick(7,16)}/>
            <Square y={7} x={17} value={this.props.squares[7][17]} onClick={() => this.props.onClick(7,17)}/>
            <Square y={7} x={18} value={this.props.squares[7][18]} onClick={() => this.props.onClick(7,18)}/>
            </div>
            <div className="board-row">
            <Square y={8} x={0} value={this.props.squares[8][0]} onClick={() => this.props.onClick(8,0)}/>
            <Square y={8} x={1} value={this.props.squares[8][1]} onClick={() => this.props.onClick(8,1)}/>
            <Square y={8} x={2} value={this.props.squares[8][2]} onClick={() => this.props.onClick(8,2)}/>
            <Square y={8} x={3} value={this.props.squares[8][3]} onClick={() => this.props.onClick(8,3)}/>
            <Square y={8} x={4} value={this.props.squares[8][4]} onClick={() => this.props.onClick(8,4)}/>
            <Square y={8} x={5} value={this.props.squares[8][5]} onClick={() => this.props.onClick(8,5)}/>
            <Square y={8} x={6} value={this.props.squares[8][6]} onClick={() => this.props.onClick(8,6)}/>
            <Square y={8} x={7} value={this.props.squares[8][7]} onClick={() => this.props.onClick(8,7)}/>
            <Square y={8} x={8} value={this.props.squares[8][8]} onClick={() => this.props.onClick(8,8)}/>
            <Square y={8} x={9} value={this.props.squares[8][9]} onClick={() => this.props.onClick(8,9)}/>
            <Square y={8} x={10} value={this.props.squares[8][10]} onClick={() => this.props.onClick(8,10)}/>
            <Square y={8} x={11} value={this.props.squares[8][11]} onClick={() => this.props.onClick(8,11)}/>
            <Square y={8} x={12} value={this.props.squares[8][12]} onClick={() => this.props.onClick(8,12)}/>
            <Square y={8} x={13} value={this.props.squares[8][13]} onClick={() => this.props.onClick(8,13)}/>
            <Square y={8} x={14} value={this.props.squares[8][14]} onClick={() => this.props.onClick(8,14)}/>
            <Square y={8} x={15} value={this.props.squares[8][15]} onClick={() => this.props.onClick(8,15)}/>
            <Square y={8} x={16} value={this.props.squares[8][16]} onClick={() => this.props.onClick(8,16)}/>
            <Square y={8} x={17} value={this.props.squares[8][17]} onClick={() => this.props.onClick(8,17)}/>
            <Square y={8} x={18} value={this.props.squares[8][18]} onClick={() => this.props.onClick(8,18)}/>
            </div>
            <div className="board-row">
            <Square y={9} x={0} value={this.props.squares[9][0]} onClick={() => this.props.onClick(9,0)}/>
            <Square y={9} x={1} value={this.props.squares[9][1]} onClick={() => this.props.onClick(9,1)}/>
            <Square y={9} x={2} value={this.props.squares[9][2]} onClick={() => this.props.onClick(9,2)}/>
            <Square y={9} x={3} value={this.props.squares[9][3]} onClick={() => this.props.onClick(9,3)}/>
            <Square y={9} x={4} value={this.props.squares[9][4]} onClick={() => this.props.onClick(9,4)}/>
            <Square y={9} x={5} value={this.props.squares[9][5]} onClick={() => this.props.onClick(9,5)}/>
            <Square y={9} x={6} value={this.props.squares[9][6]} onClick={() => this.props.onClick(9,6)}/>
            <Square y={9} x={7} value={this.props.squares[9][7]} onClick={() => this.props.onClick(9,7)}/>
            <Square y={9} x={8} value={this.props.squares[9][8]} onClick={() => this.props.onClick(9,8)}/>
            <Square y={9} x={9} value={this.props.squares[9][9]} onClick={() => this.props.onClick(9,9)}/>
            <Square y={9} x={10} value={this.props.squares[9][10]} onClick={() => this.props.onClick(9,10)}/>
            <Square y={9} x={11} value={this.props.squares[9][11]} onClick={() => this.props.onClick(9,11)}/>
            <Square y={9} x={12} value={this.props.squares[9][12]} onClick={() => this.props.onClick(9,12)}/>
            <Square y={9} x={13} value={this.props.squares[9][13]} onClick={() => this.props.onClick(9,13)}/>
            <Square y={9} x={14} value={this.props.squares[9][14]} onClick={() => this.props.onClick(9,14)}/>
            <Square y={9} x={15} value={this.props.squares[9][15]} onClick={() => this.props.onClick(9,15)}/>
            <Square y={9} x={16} value={this.props.squares[9][16]} onClick={() => this.props.onClick(9,16)}/>
            <Square y={9} x={17} value={this.props.squares[9][17]} onClick={() => this.props.onClick(9,17)}/>
            <Square y={9} x={18} value={this.props.squares[9][18]} onClick={() => this.props.onClick(9,18)}/>
            </div>
            <div className="board-row">
            <Square y={10} x={0} value={this.props.squares[10][0]} onClick={() => this.props.onClick(10,0)}/>
            <Square y={10} x={1} value={this.props.squares[10][1]} onClick={() => this.props.onClick(10,1)}/>
            <Square y={10} x={2} value={this.props.squares[10][2]} onClick={() => this.props.onClick(10,2)}/>
            <Square y={10} x={3} value={this.props.squares[10][3]} onClick={() => this.props.onClick(10,3)}/>
            <Square y={10} x={4} value={this.props.squares[10][4]} onClick={() => this.props.onClick(10,4)}/>
            <Square y={10} x={5} value={this.props.squares[10][5]} onClick={() => this.props.onClick(10,5)}/>
            <Square y={10} x={6} value={this.props.squares[10][6]} onClick={() => this.props.onClick(10,6)}/>
            <Square y={10} x={7} value={this.props.squares[10][7]} onClick={() => this.props.onClick(10,7)}/>
            <Square y={10} x={8} value={this.props.squares[10][8]} onClick={() => this.props.onClick(10,8)}/>
            <Square y={10} x={9} value={this.props.squares[10][9]} onClick={() => this.props.onClick(10,9)}/>
            <Square y={10} x={10} value={this.props.squares[10][10]} onClick={() => this.props.onClick(10,10)}/>
            <Square y={10} x={11} value={this.props.squares[10][11]} onClick={() => this.props.onClick(10,11)}/>
            <Square y={10} x={12} value={this.props.squares[10][12]} onClick={() => this.props.onClick(10,12)}/>
            <Square y={10} x={13} value={this.props.squares[10][13]} onClick={() => this.props.onClick(10,13)}/>
            <Square y={10} x={14} value={this.props.squares[10][14]} onClick={() => this.props.onClick(10,14)}/>
            <Square y={10} x={15} value={this.props.squares[10][15]} onClick={() => this.props.onClick(10,15)}/>
            <Square y={10} x={16} value={this.props.squares[10][16]} onClick={() => this.props.onClick(10,16)}/>
            <Square y={10} x={17} value={this.props.squares[10][17]} onClick={() => this.props.onClick(10,17)}/>
            <Square y={10} x={18} value={this.props.squares[10][18]} onClick={() => this.props.onClick(10,18)}/>
            </div>
            <div className="board-row">
            <Square y={11} x={0} value={this.props.squares[11][0]} onClick={() => this.props.onClick(11,0)}/>
            <Square y={11} x={1} value={this.props.squares[11][1]} onClick={() => this.props.onClick(11,1)}/>
            <Square y={11} x={2} value={this.props.squares[11][2]} onClick={() => this.props.onClick(11,2)}/>
            <Square y={11} x={3} value={this.props.squares[11][3]} onClick={() => this.props.onClick(11,3)}/>
            <Square y={11} x={4} value={this.props.squares[11][4]} onClick={() => this.props.onClick(11,4)}/>
            <Square y={11} x={5} value={this.props.squares[11][5]} onClick={() => this.props.onClick(11,5)}/>
            <Square y={11} x={6} value={this.props.squares[11][6]} onClick={() => this.props.onClick(11,6)}/>
            <Square y={11} x={7} value={this.props.squares[11][7]} onClick={() => this.props.onClick(11,7)}/>
            <Square y={11} x={8} value={this.props.squares[11][8]} onClick={() => this.props.onClick(11,8)}/>
            <Square y={11} x={9} value={this.props.squares[11][9]} onClick={() => this.props.onClick(11,9)}/>
            <Square y={11} x={10} value={this.props.squares[11][10]} onClick={() => this.props.onClick(11,10)}/>
            <Square y={11} x={11} value={this.props.squares[11][11]} onClick={() => this.props.onClick(11,11)}/>
            <Square y={11} x={12} value={this.props.squares[11][12]} onClick={() => this.props.onClick(11,12)}/>
            <Square y={11} x={13} value={this.props.squares[11][13]} onClick={() => this.props.onClick(11,13)}/>
            <Square y={11} x={14} value={this.props.squares[11][14]} onClick={() => this.props.onClick(11,14)}/>
            <Square y={11} x={15} value={this.props.squares[11][15]} onClick={() => this.props.onClick(11,15)}/>
            <Square y={11} x={16} value={this.props.squares[11][16]} onClick={() => this.props.onClick(11,16)}/>
            <Square y={11} x={17} value={this.props.squares[11][17]} onClick={() => this.props.onClick(11,17)}/>
            <Square y={11} x={18} value={this.props.squares[11][18]} onClick={() => this.props.onClick(11,18)}/>
            </div>
            <div className="board-row">
            <Square y={12} x={0} value={this.props.squares[12][0]} onClick={() => this.props.onClick(12,0)}/>
            <Square y={12} x={1} value={this.props.squares[12][1]} onClick={() => this.props.onClick(12,1)}/>
            <Square y={12} x={2} value={this.props.squares[12][2]} onClick={() => this.props.onClick(12,2)}/>
            <Square y={12} x={3} value={this.props.squares[12][3]} onClick={() => this.props.onClick(12,3)}/>
            <Square y={12} x={4} value={this.props.squares[12][4]} onClick={() => this.props.onClick(12,4)}/>
            <Square y={12} x={5} value={this.props.squares[12][5]} onClick={() => this.props.onClick(12,5)}/>
            <Square y={12} x={6} value={this.props.squares[12][6]} onClick={() => this.props.onClick(12,6)}/>
            <Square y={12} x={7} value={this.props.squares[12][7]} onClick={() => this.props.onClick(12,7)}/>
            <Square y={12} x={8} value={this.props.squares[12][8]} onClick={() => this.props.onClick(12,8)}/>
            <Square y={12} x={9} value={this.props.squares[12][9]} onClick={() => this.props.onClick(12,9)}/>
            <Square y={12} x={10} value={this.props.squares[12][10]} onClick={() => this.props.onClick(12,10)}/>
            <Square y={12} x={11} value={this.props.squares[12][11]} onClick={() => this.props.onClick(12,11)}/>
            <Square y={12} x={12} value={this.props.squares[12][12]} onClick={() => this.props.onClick(12,12)}/>
            <Square y={12} x={13} value={this.props.squares[12][13]} onClick={() => this.props.onClick(12,13)}/>
            <Square y={12} x={14} value={this.props.squares[12][14]} onClick={() => this.props.onClick(12,14)}/>
            <Square y={12} x={15} value={this.props.squares[12][15]} onClick={() => this.props.onClick(12,15)}/>
            <Square y={12} x={16} value={this.props.squares[12][16]} onClick={() => this.props.onClick(12,16)}/>
            <Square y={12} x={17} value={this.props.squares[12][17]} onClick={() => this.props.onClick(12,17)}/>
            <Square y={12} x={18} value={this.props.squares[12][18]} onClick={() => this.props.onClick(12,18)}/>
            </div>
            <div className="board-row">
            <Square y={13} x={0} value={this.props.squares[13][0]} onClick={() => this.props.onClick(13,0)}/>
            <Square y={13} x={1} value={this.props.squares[13][1]} onClick={() => this.props.onClick(13,1)}/>
            <Square y={13} x={2} value={this.props.squares[13][2]} onClick={() => this.props.onClick(13,2)}/>
            <Square y={13} x={3} value={this.props.squares[13][3]} onClick={() => this.props.onClick(13,3)}/>
            <Square y={13} x={4} value={this.props.squares[13][4]} onClick={() => this.props.onClick(13,4)}/>
            <Square y={13} x={5} value={this.props.squares[13][5]} onClick={() => this.props.onClick(13,5)}/>
            <Square y={13} x={6} value={this.props.squares[13][6]} onClick={() => this.props.onClick(13,6)}/>
            <Square y={13} x={7} value={this.props.squares[13][7]} onClick={() => this.props.onClick(13,7)}/>
            <Square y={13} x={8} value={this.props.squares[13][8]} onClick={() => this.props.onClick(13,8)}/>
            <Square y={13} x={9} value={this.props.squares[13][9]} onClick={() => this.props.onClick(13,9)}/>
            <Square y={13} x={10} value={this.props.squares[13][10]} onClick={() => this.props.onClick(13,10)}/>
            <Square y={13} x={11} value={this.props.squares[13][11]} onClick={() => this.props.onClick(13,11)}/>
            <Square y={13} x={12} value={this.props.squares[13][12]} onClick={() => this.props.onClick(13,12)}/>
            <Square y={13} x={13} value={this.props.squares[13][13]} onClick={() => this.props.onClick(13,13)}/>
            <Square y={13} x={14} value={this.props.squares[13][14]} onClick={() => this.props.onClick(13,14)}/>
            <Square y={13} x={15} value={this.props.squares[13][15]} onClick={() => this.props.onClick(13,15)}/>
            <Square y={13} x={16} value={this.props.squares[13][16]} onClick={() => this.props.onClick(13,16)}/>
            <Square y={13} x={17} value={this.props.squares[13][17]} onClick={() => this.props.onClick(13,17)}/>
            <Square y={13} x={18} value={this.props.squares[13][18]} onClick={() => this.props.onClick(13,18)}/>
            </div>
            <div className="board-row">
            <Square y={14} x={0} value={this.props.squares[14][0]} onClick={() => this.props.onClick(14,0)}/>
            <Square y={14} x={1} value={this.props.squares[14][1]} onClick={() => this.props.onClick(14,1)}/>
            <Square y={14} x={2} value={this.props.squares[14][2]} onClick={() => this.props.onClick(14,2)}/>
            <Square y={14} x={3} value={this.props.squares[14][3]} onClick={() => this.props.onClick(14,3)}/>
            <Square y={14} x={4} value={this.props.squares[14][4]} onClick={() => this.props.onClick(14,4)}/>
            <Square y={14} x={5} value={this.props.squares[14][5]} onClick={() => this.props.onClick(14,5)}/>
            <Square y={14} x={6} value={this.props.squares[14][6]} onClick={() => this.props.onClick(14,6)}/>
            <Square y={14} x={7} value={this.props.squares[14][7]} onClick={() => this.props.onClick(14,7)}/>
            <Square y={14} x={8} value={this.props.squares[14][8]} onClick={() => this.props.onClick(14,8)}/>
            <Square y={14} x={9} value={this.props.squares[14][9]} onClick={() => this.props.onClick(14,9)}/>
            <Square y={14} x={10} value={this.props.squares[14][10]} onClick={() => this.props.onClick(14,10)}/>
            <Square y={14} x={11} value={this.props.squares[14][11]} onClick={() => this.props.onClick(14,11)}/>
            <Square y={14} x={12} value={this.props.squares[14][12]} onClick={() => this.props.onClick(14,12)}/>
            <Square y={14} x={13} value={this.props.squares[14][13]} onClick={() => this.props.onClick(14,13)}/>
            <Square y={14} x={14} value={this.props.squares[14][14]} onClick={() => this.props.onClick(14,14)}/>
            <Square y={14} x={15} value={this.props.squares[14][15]} onClick={() => this.props.onClick(14,15)}/>
            <Square y={14} x={16} value={this.props.squares[14][16]} onClick={() => this.props.onClick(14,16)}/>
            <Square y={14} x={17} value={this.props.squares[14][17]} onClick={() => this.props.onClick(14,17)}/>
            <Square y={14} x={18} value={this.props.squares[14][18]} onClick={() => this.props.onClick(14,18)}/>
            </div>
            <div className="board-row">
            <Square y={15} x={0} value={this.props.squares[15][0]} onClick={() => this.props.onClick(15,0)}/>
            <Square y={15} x={1} value={this.props.squares[15][1]} onClick={() => this.props.onClick(15,1)}/>
            <Square y={15} x={2} value={this.props.squares[15][2]} onClick={() => this.props.onClick(15,2)}/>
            <Square y={15} x={3} value={this.props.squares[15][3]} onClick={() => this.props.onClick(15,3)}/>
            <Square y={15} x={4} value={this.props.squares[15][4]} onClick={() => this.props.onClick(15,4)}/>
            <Square y={15} x={5} value={this.props.squares[15][5]} onClick={() => this.props.onClick(15,5)}/>
            <Square y={15} x={6} value={this.props.squares[15][6]} onClick={() => this.props.onClick(15,6)}/>
            <Square y={15} x={7} value={this.props.squares[15][7]} onClick={() => this.props.onClick(15,7)}/>
            <Square y={15} x={8} value={this.props.squares[15][8]} onClick={() => this.props.onClick(15,8)}/>
            <Square y={15} x={9} value={this.props.squares[15][9]} onClick={() => this.props.onClick(15,9)}/>
            <Square y={15} x={10} value={this.props.squares[15][10]} onClick={() => this.props.onClick(15,10)}/>
            <Square y={15} x={11} value={this.props.squares[15][11]} onClick={() => this.props.onClick(15,11)}/>
            <Square y={15} x={12} value={this.props.squares[15][12]} onClick={() => this.props.onClick(15,12)}/>
            <Square y={15} x={13} value={this.props.squares[15][13]} onClick={() => this.props.onClick(15,13)}/>
            <Square y={15} x={14} value={this.props.squares[15][14]} onClick={() => this.props.onClick(15,14)}/>
            <Square y={15} x={15} value={this.props.squares[15][15]} onClick={() => this.props.onClick(15,15)}/>
            <Square y={15} x={16} value={this.props.squares[15][16]} onClick={() => this.props.onClick(15,16)}/>
            <Square y={15} x={17} value={this.props.squares[15][17]} onClick={() => this.props.onClick(15,17)}/>
            <Square y={15} x={18} value={this.props.squares[15][18]} onClick={() => this.props.onClick(15,18)}/>
            </div>
            <div className="board-row">
            <Square y={16} x={0} value={this.props.squares[16][0]} onClick={() => this.props.onClick(16,0)}/>
            <Square y={16} x={1} value={this.props.squares[16][1]} onClick={() => this.props.onClick(16,1)}/>
            <Square y={16} x={2} value={this.props.squares[16][2]} onClick={() => this.props.onClick(16,2)}/>
            <Square y={16} x={3} value={this.props.squares[16][3]} onClick={() => this.props.onClick(16,3)}/>
            <Square y={16} x={4} value={this.props.squares[16][4]} onClick={() => this.props.onClick(16,4)}/>
            <Square y={16} x={5} value={this.props.squares[16][5]} onClick={() => this.props.onClick(16,5)}/>
            <Square y={16} x={6} value={this.props.squares[16][6]} onClick={() => this.props.onClick(16,6)}/>
            <Square y={16} x={7} value={this.props.squares[16][7]} onClick={() => this.props.onClick(16,7)}/>
            <Square y={16} x={8} value={this.props.squares[16][8]} onClick={() => this.props.onClick(16,8)}/>
            <Square y={16} x={9} value={this.props.squares[16][9]} onClick={() => this.props.onClick(16,9)}/>
            <Square y={16} x={10} value={this.props.squares[16][10]} onClick={() => this.props.onClick(16,10)}/>
            <Square y={16} x={11} value={this.props.squares[16][11]} onClick={() => this.props.onClick(16,11)}/>
            <Square y={16} x={12} value={this.props.squares[16][12]} onClick={() => this.props.onClick(16,12)}/>
            <Square y={16} x={13} value={this.props.squares[16][13]} onClick={() => this.props.onClick(16,13)}/>
            <Square y={16} x={14} value={this.props.squares[16][14]} onClick={() => this.props.onClick(16,14)}/>
            <Square y={16} x={15} value={this.props.squares[16][15]} onClick={() => this.props.onClick(16,15)}/>
            <Square y={16} x={16} value={this.props.squares[16][16]} onClick={() => this.props.onClick(16,16)}/>
            <Square y={16} x={17} value={this.props.squares[16][17]} onClick={() => this.props.onClick(16,17)}/>
            <Square y={16} x={18} value={this.props.squares[16][18]} onClick={() => this.props.onClick(16,18)}/>
            </div>
            <div className="board-row">
            <Square y={17} x={0} value={this.props.squares[17][0]} onClick={() => this.props.onClick(17,0)}/>
            <Square y={17} x={1} value={this.props.squares[17][1]} onClick={() => this.props.onClick(17,1)}/>
            <Square y={17} x={2} value={this.props.squares[17][2]} onClick={() => this.props.onClick(17,2)}/>
            <Square y={17} x={3} value={this.props.squares[17][3]} onClick={() => this.props.onClick(17,3)}/>
            <Square y={17} x={4} value={this.props.squares[17][4]} onClick={() => this.props.onClick(17,4)}/>
            <Square y={17} x={5} value={this.props.squares[17][5]} onClick={() => this.props.onClick(17,5)}/>
            <Square y={17} x={6} value={this.props.squares[17][6]} onClick={() => this.props.onClick(17,6)}/>
            <Square y={17} x={7} value={this.props.squares[17][7]} onClick={() => this.props.onClick(17,7)}/>
            <Square y={17} x={8} value={this.props.squares[17][8]} onClick={() => this.props.onClick(17,8)}/>
            <Square y={17} x={9} value={this.props.squares[17][9]} onClick={() => this.props.onClick(17,9)}/>
            <Square y={17} x={10} value={this.props.squares[17][10]} onClick={() => this.props.onClick(17,10)}/>
            <Square y={17} x={11} value={this.props.squares[17][11]} onClick={() => this.props.onClick(17,11)}/>
            <Square y={17} x={12} value={this.props.squares[17][12]} onClick={() => this.props.onClick(17,12)}/>
            <Square y={17} x={13} value={this.props.squares[17][13]} onClick={() => this.props.onClick(17,13)}/>
            <Square y={17} x={14} value={this.props.squares[17][14]} onClick={() => this.props.onClick(17,14)}/>
            <Square y={17} x={15} value={this.props.squares[17][15]} onClick={() => this.props.onClick(17,15)}/>
            <Square y={17} x={16} value={this.props.squares[17][16]} onClick={() => this.props.onClick(17,16)}/>
            <Square y={17} x={17} value={this.props.squares[17][17]} onClick={() => this.props.onClick(17,17)}/>
            <Square y={17} x={18} value={this.props.squares[17][18]} onClick={() => this.props.onClick(17,18)}/>
            </div>
            <div className="board-row">
            <Square y={18} x={0} value={this.props.squares[18][0]} onClick={() => this.props.onClick(18,0)}/>
            <Square y={18} x={1} value={this.props.squares[18][1]} onClick={() => this.props.onClick(18,1)}/>
            <Square y={18} x={2} value={this.props.squares[18][2]} onClick={() => this.props.onClick(18,2)}/>
            <Square y={18} x={3} value={this.props.squares[18][3]} onClick={() => this.props.onClick(18,3)}/>
            <Square y={18} x={4} value={this.props.squares[18][4]} onClick={() => this.props.onClick(18,4)}/>
            <Square y={18} x={5} value={this.props.squares[18][5]} onClick={() => this.props.onClick(18,5)}/>
            <Square y={18} x={6} value={this.props.squares[18][6]} onClick={() => this.props.onClick(18,6)}/>
            <Square y={18} x={7} value={this.props.squares[18][7]} onClick={() => this.props.onClick(18,7)}/>
            <Square y={18} x={8} value={this.props.squares[18][8]} onClick={() => this.props.onClick(18,8)}/>
            <Square y={18} x={9} value={this.props.squares[18][9]} onClick={() => this.props.onClick(18,9)}/>
            <Square y={18} x={10} value={this.props.squares[18][10]} onClick={() => this.props.onClick(18,10)}/>
            <Square y={18} x={11} value={this.props.squares[18][11]} onClick={() => this.props.onClick(18,11)}/>
            <Square y={18} x={12} value={this.props.squares[18][12]} onClick={() => this.props.onClick(18,12)}/>
            <Square y={18} x={13} value={this.props.squares[18][13]} onClick={() => this.props.onClick(18,13)}/>
            <Square y={18} x={14} value={this.props.squares[18][14]} onClick={() => this.props.onClick(18,14)}/>
            <Square y={18} x={15} value={this.props.squares[18][15]} onClick={() => this.props.onClick(18,15)}/>
            <Square y={18} x={16} value={this.props.squares[18][16]} onClick={() => this.props.onClick(18,16)}/>
            <Square y={18} x={17} value={this.props.squares[18][17]} onClick={() => this.props.onClick(18,17)}/>
            <Square y={18} x={18} value={this.props.squares[18][18]} onClick={() => this.props.onClick(18,18)}/>
            </div>

            </div>
        );
    }
}

var size = 19
var init_squares = [];
for (var i=0; i<size; i++){
    init_squares[i] = [];
    for (var j=0; j<size; j++){
        init_squares[i][j] = '-';
    }
}

class Game extends React.Component {
    constructor() {
        super();
        this.state = {
            squares: init_squares,
            oIsNext: true,
            winner: null,
        };
    }

    handleClick(i,j) {
        const squares = this.state.squares.slice(); //squares를 copy함.
        if ( squares[i][j] != '-' || this.state.winner != null) return;

        squares[i][j] =this.state.oIsNext ? 'O' : 'X';

        this.setState({
            squares: squares,
            oIsNext: !this.state.oIsNext,
            winner: calculateWinner(squares, i, j),
        });
    }

    render() {
        let status;
        if (this.state.winner) {
            status =  this.state.winner + ' Win!!!' ;
        } else {
            status = 'Next : ' + (this.state.oIsNext ? 'O' : 'X');
        }
        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        squares={this.state.squares}
                        onClick={(i,j) => this.handleClick(i,j)}
                        restart={() => this.restart()}
                    />
                </div>
                <div className="game-info">
                    <div id='status_label'>{status}</div>
                </div>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);

function calculateWinner(squares, i, j) {
    var val = squares[i][j];
    //좌우 체크
    for(let k=0; k<=4; k++){
        if(j+k<=18 && j+k-4>=0){
                if(val==squares[i][j+k] &&
                    val==squares[i][j+k-1] &&
                    val==squares[i][j+k-2] &&
                    val==squares[i][j+k-3] &&
                    val==squares[i][j+k-4]) return val;
        }
    }

    //위아래 체크
    for(let k=0; k<=4; k++){
        if(i+k<=18 && i+k-4>=0){
                if(val==squares[i+k][j] &&
                    val==squares[i+k-1][j] &&
                    val==squares[i+k-2][j] &&
                    val==squares[i+k-3][j] &&
                    val==squares[i+k-4][j]) return val;
        }
    }

    //왼쪽위-오른쪽아래 대각선 체크
    for(let k=0; k<=4; k++){
        if(i+k<=18 && j+k<=18 && i+k-4>=0 && j+k-4>=0){
                if(val==squares[i+k][j+k] &&
                    val==squares[i+k-1][j+k-1] &&
                    val==squares[i+k-2][j+k-2] &&
                    val==squares[i+k-3][j+k-3] &&
                    val==squares[i+k-4][j+k-4]) return val;
        }
    }

    //왼쪽아래-오른쪽위 대각선 체크
    for(let k=0; k<=4; k++){
        if(i+k<=18 && j-k+4<=18 && i+k-4>=0 && j-k>=0){
                if(val==squares[i+k][j-k] &&
                    val==squares[i+k-1][j-k+1] &&
                    val==squares[i+k-2][j-k+2] &&
                    val==squares[i+k-3][j-k+3] &&
                    val==squares[i+k-4][j-k+4]) return val;
        }
    }

    return null;
}
