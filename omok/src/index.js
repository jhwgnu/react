import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props) {
    return (
        <button id={props.id} className="square" onClick={()=>props.onClick()}>
            {props.value}
        </button>
    );
}

var size = 19;

class Board extends React.Component {
    render() {
        return (
            <div>
            <div className="status">{status}</div>

            <div className="board-row">
            <Square id={"0_0"} value={this.props.squares[0][0]} onClick={() => this.props.onClick(0,0)}/>
            <Square id={"0_1"} value={this.props.squares[0][1]} onClick={() => this.props.onClick(0,1)}/>
            <Square id={"0_2"} value={this.props.squares[0][2]} onClick={() => this.props.onClick(0,2)}/>
            <Square id={"0_3"} value={this.props.squares[0][3]} onClick={() => this.props.onClick(0,3)}/>
            <Square id={"0_4"} value={this.props.squares[0][4]} onClick={() => this.props.onClick(0,4)}/>
            <Square id={"0_5"} value={this.props.squares[0][5]} onClick={() => this.props.onClick(0,5)}/>
            <Square id={"0_6"} value={this.props.squares[0][6]} onClick={() => this.props.onClick(0,6)}/>
            <Square id={"0_7"} value={this.props.squares[0][7]} onClick={() => this.props.onClick(0,7)}/>
            <Square id={"0_8"} value={this.props.squares[0][8]} onClick={() => this.props.onClick(0,8)}/>
            <Square id={"0_9"} value={this.props.squares[0][9]} onClick={() => this.props.onClick(0,9)}/>
            <Square id={"0_10"} value={this.props.squares[0][10]} onClick={() => this.props.onClick(0,10)}/>
            <Square id={"0_11"} value={this.props.squares[0][11]} onClick={() => this.props.onClick(0,11)}/>
            <Square id={"0_12"} value={this.props.squares[0][12]} onClick={() => this.props.onClick(0,12)}/>
            <Square id={"0_13"} value={this.props.squares[0][13]} onClick={() => this.props.onClick(0,13)}/>
            <Square id={"0_14"} value={this.props.squares[0][14]} onClick={() => this.props.onClick(0,14)}/>
            <Square id={"0_15"} value={this.props.squares[0][15]} onClick={() => this.props.onClick(0,15)}/>
            <Square id={"0_16"} value={this.props.squares[0][16]} onClick={() => this.props.onClick(0,16)}/>
            <Square id={"0_17"} value={this.props.squares[0][17]} onClick={() => this.props.onClick(0,17)}/>
            <Square id={"0_18"} value={this.props.squares[0][18]} onClick={() => this.props.onClick(0,18)}/>
            </div>
            <div className="board-row">
            <Square id={"1_0"} value={this.props.squares[1][0]} onClick={() => this.props.onClick(1,0)}/>
            <Square id={"1_1"} value={this.props.squares[1][1]} onClick={() => this.props.onClick(1,1)}/>
            <Square id={"1_2"} value={this.props.squares[1][2]} onClick={() => this.props.onClick(1,2)}/>
            <Square id={"1_3"} value={this.props.squares[1][3]} onClick={() => this.props.onClick(1,3)}/>
            <Square id={"1_4"} value={this.props.squares[1][4]} onClick={() => this.props.onClick(1,4)}/>
            <Square id={"1_5"} value={this.props.squares[1][5]} onClick={() => this.props.onClick(1,5)}/>
            <Square id={"1_6"} value={this.props.squares[1][6]} onClick={() => this.props.onClick(1,6)}/>
            <Square id={"1_7"} value={this.props.squares[1][7]} onClick={() => this.props.onClick(1,7)}/>
            <Square id={"1_8"} value={this.props.squares[1][8]} onClick={() => this.props.onClick(1,8)}/>
            <Square id={"1_9"} value={this.props.squares[1][9]} onClick={() => this.props.onClick(1,9)}/>
            <Square id={"1_10"} value={this.props.squares[1][10]} onClick={() => this.props.onClick(1,10)}/>
            <Square id={"1_11"} value={this.props.squares[1][11]} onClick={() => this.props.onClick(1,11)}/>
            <Square id={"1_12"} value={this.props.squares[1][12]} onClick={() => this.props.onClick(1,12)}/>
            <Square id={"1_13"} value={this.props.squares[1][13]} onClick={() => this.props.onClick(1,13)}/>
            <Square id={"1_14"} value={this.props.squares[1][14]} onClick={() => this.props.onClick(1,14)}/>
            <Square id={"1_15"} value={this.props.squares[1][15]} onClick={() => this.props.onClick(1,15)}/>
            <Square id={"1_16"} value={this.props.squares[1][16]} onClick={() => this.props.onClick(1,16)}/>
            <Square id={"1_17"} value={this.props.squares[1][17]} onClick={() => this.props.onClick(1,17)}/>
            <Square id={"1_18"} value={this.props.squares[1][18]} onClick={() => this.props.onClick(1,18)}/>
            </div>
            <div className="board-row">
            <Square id={"2_0"} value={this.props.squares[2][0]} onClick={() => this.props.onClick(2,0)}/>
            <Square id={"2_1"} value={this.props.squares[2][1]} onClick={() => this.props.onClick(2,1)}/>
            <Square id={"2_2"} value={this.props.squares[2][2]} onClick={() => this.props.onClick(2,2)}/>
            <Square id={"2_3"} value={this.props.squares[2][3]} onClick={() => this.props.onClick(2,3)}/>
            <Square id={"2_4"} value={this.props.squares[2][4]} onClick={() => this.props.onClick(2,4)}/>
            <Square id={"2_5"} value={this.props.squares[2][5]} onClick={() => this.props.onClick(2,5)}/>
            <Square id={"2_6"} value={this.props.squares[2][6]} onClick={() => this.props.onClick(2,6)}/>
            <Square id={"2_7"} value={this.props.squares[2][7]} onClick={() => this.props.onClick(2,7)}/>
            <Square id={"2_8"} value={this.props.squares[2][8]} onClick={() => this.props.onClick(2,8)}/>
            <Square id={"2_9"} value={this.props.squares[2][9]} onClick={() => this.props.onClick(2,9)}/>
            <Square id={"2_10"} value={this.props.squares[2][10]} onClick={() => this.props.onClick(2,10)}/>
            <Square id={"2_11"} value={this.props.squares[2][11]} onClick={() => this.props.onClick(2,11)}/>
            <Square id={"2_12"} value={this.props.squares[2][12]} onClick={() => this.props.onClick(2,12)}/>
            <Square id={"2_13"} value={this.props.squares[2][13]} onClick={() => this.props.onClick(2,13)}/>
            <Square id={"2_14"} value={this.props.squares[2][14]} onClick={() => this.props.onClick(2,14)}/>
            <Square id={"2_15"} value={this.props.squares[2][15]} onClick={() => this.props.onClick(2,15)}/>
            <Square id={"2_16"} value={this.props.squares[2][16]} onClick={() => this.props.onClick(2,16)}/>
            <Square id={"2_17"} value={this.props.squares[2][17]} onClick={() => this.props.onClick(2,17)}/>
            <Square id={"2_18"} value={this.props.squares[2][18]} onClick={() => this.props.onClick(2,18)}/>
            </div>
            <div className="board-row">
            <Square id={"3_0"} value={this.props.squares[3][0]} onClick={() => this.props.onClick(3,0)}/>
            <Square id={"3_1"} value={this.props.squares[3][1]} onClick={() => this.props.onClick(3,1)}/>
            <Square id={"3_2"} value={this.props.squares[3][2]} onClick={() => this.props.onClick(3,2)}/>
            <Square id={"3_3"} value={this.props.squares[3][3]} onClick={() => this.props.onClick(3,3)}/>
            <Square id={"3_4"} value={this.props.squares[3][4]} onClick={() => this.props.onClick(3,4)}/>
            <Square id={"3_5"} value={this.props.squares[3][5]} onClick={() => this.props.onClick(3,5)}/>
            <Square id={"3_6"} value={this.props.squares[3][6]} onClick={() => this.props.onClick(3,6)}/>
            <Square id={"3_7"} value={this.props.squares[3][7]} onClick={() => this.props.onClick(3,7)}/>
            <Square id={"3_8"} value={this.props.squares[3][8]} onClick={() => this.props.onClick(3,8)}/>
            <Square id={"3_9"} value={this.props.squares[3][9]} onClick={() => this.props.onClick(3,9)}/>
            <Square id={"3_10"} value={this.props.squares[3][10]} onClick={() => this.props.onClick(3,10)}/>
            <Square id={"3_11"} value={this.props.squares[3][11]} onClick={() => this.props.onClick(3,11)}/>
            <Square id={"3_12"} value={this.props.squares[3][12]} onClick={() => this.props.onClick(3,12)}/>
            <Square id={"3_13"} value={this.props.squares[3][13]} onClick={() => this.props.onClick(3,13)}/>
            <Square id={"3_14"} value={this.props.squares[3][14]} onClick={() => this.props.onClick(3,14)}/>
            <Square id={"3_15"} value={this.props.squares[3][15]} onClick={() => this.props.onClick(3,15)}/>
            <Square id={"3_16"} value={this.props.squares[3][16]} onClick={() => this.props.onClick(3,16)}/>
            <Square id={"3_17"} value={this.props.squares[3][17]} onClick={() => this.props.onClick(3,17)}/>
            <Square id={"3_18"} value={this.props.squares[3][18]} onClick={() => this.props.onClick(3,18)}/>
            </div>
            <div className="board-row">
            <Square id={"4_0"} value={this.props.squares[4][0]} onClick={() => this.props.onClick(4,0)}/>
            <Square id={"4_1"} value={this.props.squares[4][1]} onClick={() => this.props.onClick(4,1)}/>
            <Square id={"4_2"} value={this.props.squares[4][2]} onClick={() => this.props.onClick(4,2)}/>
            <Square id={"4_3"} value={this.props.squares[4][3]} onClick={() => this.props.onClick(4,3)}/>
            <Square id={"4_4"} value={this.props.squares[4][4]} onClick={() => this.props.onClick(4,4)}/>
            <Square id={"4_5"} value={this.props.squares[4][5]} onClick={() => this.props.onClick(4,5)}/>
            <Square id={"4_6"} value={this.props.squares[4][6]} onClick={() => this.props.onClick(4,6)}/>
            <Square id={"4_7"} value={this.props.squares[4][7]} onClick={() => this.props.onClick(4,7)}/>
            <Square id={"4_8"} value={this.props.squares[4][8]} onClick={() => this.props.onClick(4,8)}/>
            <Square id={"4_9"} value={this.props.squares[4][9]} onClick={() => this.props.onClick(4,9)}/>
            <Square id={"4_10"} value={this.props.squares[4][10]} onClick={() => this.props.onClick(4,10)}/>
            <Square id={"4_11"} value={this.props.squares[4][11]} onClick={() => this.props.onClick(4,11)}/>
            <Square id={"4_12"} value={this.props.squares[4][12]} onClick={() => this.props.onClick(4,12)}/>
            <Square id={"4_13"} value={this.props.squares[4][13]} onClick={() => this.props.onClick(4,13)}/>
            <Square id={"4_14"} value={this.props.squares[4][14]} onClick={() => this.props.onClick(4,14)}/>
            <Square id={"4_15"} value={this.props.squares[4][15]} onClick={() => this.props.onClick(4,15)}/>
            <Square id={"4_16"} value={this.props.squares[4][16]} onClick={() => this.props.onClick(4,16)}/>
            <Square id={"4_17"} value={this.props.squares[4][17]} onClick={() => this.props.onClick(4,17)}/>
            <Square id={"4_18"} value={this.props.squares[4][18]} onClick={() => this.props.onClick(4,18)}/>
            </div>
            <div className="board-row">
            <Square id={"5_0"} value={this.props.squares[5][0]} onClick={() => this.props.onClick(5,0)}/>
            <Square id={"5_1"} value={this.props.squares[5][1]} onClick={() => this.props.onClick(5,1)}/>
            <Square id={"5_2"} value={this.props.squares[5][2]} onClick={() => this.props.onClick(5,2)}/>
            <Square id={"5_3"} value={this.props.squares[5][3]} onClick={() => this.props.onClick(5,3)}/>
            <Square id={"5_4"} value={this.props.squares[5][4]} onClick={() => this.props.onClick(5,4)}/>
            <Square id={"5_5"} value={this.props.squares[5][5]} onClick={() => this.props.onClick(5,5)}/>
            <Square id={"5_6"} value={this.props.squares[5][6]} onClick={() => this.props.onClick(5,6)}/>
            <Square id={"5_7"} value={this.props.squares[5][7]} onClick={() => this.props.onClick(5,7)}/>
            <Square id={"5_8"} value={this.props.squares[5][8]} onClick={() => this.props.onClick(5,8)}/>
            <Square id={"5_9"} value={this.props.squares[5][9]} onClick={() => this.props.onClick(5,9)}/>
            <Square id={"5_10"} value={this.props.squares[5][10]} onClick={() => this.props.onClick(5,10)}/>
            <Square id={"5_11"} value={this.props.squares[5][11]} onClick={() => this.props.onClick(5,11)}/>
            <Square id={"5_12"} value={this.props.squares[5][12]} onClick={() => this.props.onClick(5,12)}/>
            <Square id={"5_13"} value={this.props.squares[5][13]} onClick={() => this.props.onClick(5,13)}/>
            <Square id={"5_14"} value={this.props.squares[5][14]} onClick={() => this.props.onClick(5,14)}/>
            <Square id={"5_15"} value={this.props.squares[5][15]} onClick={() => this.props.onClick(5,15)}/>
            <Square id={"5_16"} value={this.props.squares[5][16]} onClick={() => this.props.onClick(5,16)}/>
            <Square id={"5_17"} value={this.props.squares[5][17]} onClick={() => this.props.onClick(5,17)}/>
            <Square id={"5_18"} value={this.props.squares[5][18]} onClick={() => this.props.onClick(5,18)}/>
            </div>
            <div className="board-row">
            <Square id={"6_0"} value={this.props.squares[6][0]} onClick={() => this.props.onClick(6,0)}/>
            <Square id={"6_1"} value={this.props.squares[6][1]} onClick={() => this.props.onClick(6,1)}/>
            <Square id={"6_2"} value={this.props.squares[6][2]} onClick={() => this.props.onClick(6,2)}/>
            <Square id={"6_3"} value={this.props.squares[6][3]} onClick={() => this.props.onClick(6,3)}/>
            <Square id={"6_4"} value={this.props.squares[6][4]} onClick={() => this.props.onClick(6,4)}/>
            <Square id={"6_5"} value={this.props.squares[6][5]} onClick={() => this.props.onClick(6,5)}/>
            <Square id={"6_6"} value={this.props.squares[6][6]} onClick={() => this.props.onClick(6,6)}/>
            <Square id={"6_7"} value={this.props.squares[6][7]} onClick={() => this.props.onClick(6,7)}/>
            <Square id={"6_8"} value={this.props.squares[6][8]} onClick={() => this.props.onClick(6,8)}/>
            <Square id={"6_9"} value={this.props.squares[6][9]} onClick={() => this.props.onClick(6,9)}/>
            <Square id={"6_10"} value={this.props.squares[6][10]} onClick={() => this.props.onClick(6,10)}/>
            <Square id={"6_11"} value={this.props.squares[6][11]} onClick={() => this.props.onClick(6,11)}/>
            <Square id={"6_12"} value={this.props.squares[6][12]} onClick={() => this.props.onClick(6,12)}/>
            <Square id={"6_13"} value={this.props.squares[6][13]} onClick={() => this.props.onClick(6,13)}/>
            <Square id={"6_14"} value={this.props.squares[6][14]} onClick={() => this.props.onClick(6,14)}/>
            <Square id={"6_15"} value={this.props.squares[6][15]} onClick={() => this.props.onClick(6,15)}/>
            <Square id={"6_16"} value={this.props.squares[6][16]} onClick={() => this.props.onClick(6,16)}/>
            <Square id={"6_17"} value={this.props.squares[6][17]} onClick={() => this.props.onClick(6,17)}/>
            <Square id={"6_18"} value={this.props.squares[6][18]} onClick={() => this.props.onClick(6,18)}/>
            </div>
            <div className="board-row">
            <Square id={"7_0"} value={this.props.squares[7][0]} onClick={() => this.props.onClick(7,0)}/>
            <Square id={"7_1"} value={this.props.squares[7][1]} onClick={() => this.props.onClick(7,1)}/>
            <Square id={"7_2"} value={this.props.squares[7][2]} onClick={() => this.props.onClick(7,2)}/>
            <Square id={"7_3"} value={this.props.squares[7][3]} onClick={() => this.props.onClick(7,3)}/>
            <Square id={"7_4"} value={this.props.squares[7][4]} onClick={() => this.props.onClick(7,4)}/>
            <Square id={"7_5"} value={this.props.squares[7][5]} onClick={() => this.props.onClick(7,5)}/>
            <Square id={"7_6"} value={this.props.squares[7][6]} onClick={() => this.props.onClick(7,6)}/>
            <Square id={"7_7"} value={this.props.squares[7][7]} onClick={() => this.props.onClick(7,7)}/>
            <Square id={"7_8"} value={this.props.squares[7][8]} onClick={() => this.props.onClick(7,8)}/>
            <Square id={"7_9"} value={this.props.squares[7][9]} onClick={() => this.props.onClick(7,9)}/>
            <Square id={"7_10"} value={this.props.squares[7][10]} onClick={() => this.props.onClick(7,10)}/>
            <Square id={"7_11"} value={this.props.squares[7][11]} onClick={() => this.props.onClick(7,11)}/>
            <Square id={"7_12"} value={this.props.squares[7][12]} onClick={() => this.props.onClick(7,12)}/>
            <Square id={"7_13"} value={this.props.squares[7][13]} onClick={() => this.props.onClick(7,13)}/>
            <Square id={"7_14"} value={this.props.squares[7][14]} onClick={() => this.props.onClick(7,14)}/>
            <Square id={"7_15"} value={this.props.squares[7][15]} onClick={() => this.props.onClick(7,15)}/>
            <Square id={"7_16"} value={this.props.squares[7][16]} onClick={() => this.props.onClick(7,16)}/>
            <Square id={"7_17"} value={this.props.squares[7][17]} onClick={() => this.props.onClick(7,17)}/>
            <Square id={"7_18"} value={this.props.squares[7][18]} onClick={() => this.props.onClick(7,18)}/>
            </div>
            <div className="board-row">
            <Square id={"8_0"} value={this.props.squares[8][0]} onClick={() => this.props.onClick(8,0)}/>
            <Square id={"8_1"} value={this.props.squares[8][1]} onClick={() => this.props.onClick(8,1)}/>
            <Square id={"8_2"} value={this.props.squares[8][2]} onClick={() => this.props.onClick(8,2)}/>
            <Square id={"8_3"} value={this.props.squares[8][3]} onClick={() => this.props.onClick(8,3)}/>
            <Square id={"8_4"} value={this.props.squares[8][4]} onClick={() => this.props.onClick(8,4)}/>
            <Square id={"8_5"} value={this.props.squares[8][5]} onClick={() => this.props.onClick(8,5)}/>
            <Square id={"8_6"} value={this.props.squares[8][6]} onClick={() => this.props.onClick(8,6)}/>
            <Square id={"8_7"} value={this.props.squares[8][7]} onClick={() => this.props.onClick(8,7)}/>
            <Square id={"8_8"} value={this.props.squares[8][8]} onClick={() => this.props.onClick(8,8)}/>
            <Square id={"8_9"} value={this.props.squares[8][9]} onClick={() => this.props.onClick(8,9)}/>
            <Square id={"8_10"} value={this.props.squares[8][10]} onClick={() => this.props.onClick(8,10)}/>
            <Square id={"8_11"} value={this.props.squares[8][11]} onClick={() => this.props.onClick(8,11)}/>
            <Square id={"8_12"} value={this.props.squares[8][12]} onClick={() => this.props.onClick(8,12)}/>
            <Square id={"8_13"} value={this.props.squares[8][13]} onClick={() => this.props.onClick(8,13)}/>
            <Square id={"8_14"} value={this.props.squares[8][14]} onClick={() => this.props.onClick(8,14)}/>
            <Square id={"8_15"} value={this.props.squares[8][15]} onClick={() => this.props.onClick(8,15)}/>
            <Square id={"8_16"} value={this.props.squares[8][16]} onClick={() => this.props.onClick(8,16)}/>
            <Square id={"8_17"} value={this.props.squares[8][17]} onClick={() => this.props.onClick(8,17)}/>
            <Square id={"8_18"} value={this.props.squares[8][18]} onClick={() => this.props.onClick(8,18)}/>
            </div>
            <div className="board-row">
            <Square id={"9_0"} value={this.props.squares[9][0]} onClick={() => this.props.onClick(9,0)}/>
            <Square id={"9_1"} value={this.props.squares[9][1]} onClick={() => this.props.onClick(9,1)}/>
            <Square id={"9_2"} value={this.props.squares[9][2]} onClick={() => this.props.onClick(9,2)}/>
            <Square id={"9_3"} value={this.props.squares[9][3]} onClick={() => this.props.onClick(9,3)}/>
            <Square id={"9_4"} value={this.props.squares[9][4]} onClick={() => this.props.onClick(9,4)}/>
            <Square id={"9_5"} value={this.props.squares[9][5]} onClick={() => this.props.onClick(9,5)}/>
            <Square id={"9_6"} value={this.props.squares[9][6]} onClick={() => this.props.onClick(9,6)}/>
            <Square id={"9_7"} value={this.props.squares[9][7]} onClick={() => this.props.onClick(9,7)}/>
            <Square id={"9_8"} value={this.props.squares[9][8]} onClick={() => this.props.onClick(9,8)}/>
            <Square id={"9_9"} value={this.props.squares[9][9]} onClick={() => this.props.onClick(9,9)}/>
            <Square id={"9_10"} value={this.props.squares[9][10]} onClick={() => this.props.onClick(9,10)}/>
            <Square id={"9_11"} value={this.props.squares[9][11]} onClick={() => this.props.onClick(9,11)}/>
            <Square id={"9_12"} value={this.props.squares[9][12]} onClick={() => this.props.onClick(9,12)}/>
            <Square id={"9_13"} value={this.props.squares[9][13]} onClick={() => this.props.onClick(9,13)}/>
            <Square id={"9_14"} value={this.props.squares[9][14]} onClick={() => this.props.onClick(9,14)}/>
            <Square id={"9_15"} value={this.props.squares[9][15]} onClick={() => this.props.onClick(9,15)}/>
            <Square id={"9_16"} value={this.props.squares[9][16]} onClick={() => this.props.onClick(9,16)}/>
            <Square id={"9_17"} value={this.props.squares[9][17]} onClick={() => this.props.onClick(9,17)}/>
            <Square id={"9_18"} value={this.props.squares[9][18]} onClick={() => this.props.onClick(9,18)}/>
            </div>
            <div className="board-row">
            <Square id={"10_0"} value={this.props.squares[10][0]} onClick={() => this.props.onClick(10,0)}/>
            <Square id={"10_1"} value={this.props.squares[10][1]} onClick={() => this.props.onClick(10,1)}/>
            <Square id={"10_2"} value={this.props.squares[10][2]} onClick={() => this.props.onClick(10,2)}/>
            <Square id={"10_3"} value={this.props.squares[10][3]} onClick={() => this.props.onClick(10,3)}/>
            <Square id={"10_4"} value={this.props.squares[10][4]} onClick={() => this.props.onClick(10,4)}/>
            <Square id={"10_5"} value={this.props.squares[10][5]} onClick={() => this.props.onClick(10,5)}/>
            <Square id={"10_6"} value={this.props.squares[10][6]} onClick={() => this.props.onClick(10,6)}/>
            <Square id={"10_7"} value={this.props.squares[10][7]} onClick={() => this.props.onClick(10,7)}/>
            <Square id={"10_8"} value={this.props.squares[10][8]} onClick={() => this.props.onClick(10,8)}/>
            <Square id={"10_9"} value={this.props.squares[10][9]} onClick={() => this.props.onClick(10,9)}/>
            <Square id={"10_10"} value={this.props.squares[10][10]} onClick={() => this.props.onClick(10,10)}/>
            <Square id={"10_11"} value={this.props.squares[10][11]} onClick={() => this.props.onClick(10,11)}/>
            <Square id={"10_12"} value={this.props.squares[10][12]} onClick={() => this.props.onClick(10,12)}/>
            <Square id={"10_13"} value={this.props.squares[10][13]} onClick={() => this.props.onClick(10,13)}/>
            <Square id={"10_14"} value={this.props.squares[10][14]} onClick={() => this.props.onClick(10,14)}/>
            <Square id={"10_15"} value={this.props.squares[10][15]} onClick={() => this.props.onClick(10,15)}/>
            <Square id={"10_16"} value={this.props.squares[10][16]} onClick={() => this.props.onClick(10,16)}/>
            <Square id={"10_17"} value={this.props.squares[10][17]} onClick={() => this.props.onClick(10,17)}/>
            <Square id={"10_18"} value={this.props.squares[10][18]} onClick={() => this.props.onClick(10,18)}/>
            </div>
            <div className="board-row">
            <Square id={"11_0"} value={this.props.squares[11][0]} onClick={() => this.props.onClick(11,0)}/>
            <Square id={"11_1"} value={this.props.squares[11][1]} onClick={() => this.props.onClick(11,1)}/>
            <Square id={"11_2"} value={this.props.squares[11][2]} onClick={() => this.props.onClick(11,2)}/>
            <Square id={"11_3"} value={this.props.squares[11][3]} onClick={() => this.props.onClick(11,3)}/>
            <Square id={"11_4"} value={this.props.squares[11][4]} onClick={() => this.props.onClick(11,4)}/>
            <Square id={"11_5"} value={this.props.squares[11][5]} onClick={() => this.props.onClick(11,5)}/>
            <Square id={"11_6"} value={this.props.squares[11][6]} onClick={() => this.props.onClick(11,6)}/>
            <Square id={"11_7"} value={this.props.squares[11][7]} onClick={() => this.props.onClick(11,7)}/>
            <Square id={"11_8"} value={this.props.squares[11][8]} onClick={() => this.props.onClick(11,8)}/>
            <Square id={"11_9"} value={this.props.squares[11][9]} onClick={() => this.props.onClick(11,9)}/>
            <Square id={"11_10"} value={this.props.squares[11][10]} onClick={() => this.props.onClick(11,10)}/>
            <Square id={"11_11"} value={this.props.squares[11][11]} onClick={() => this.props.onClick(11,11)}/>
            <Square id={"11_12"} value={this.props.squares[11][12]} onClick={() => this.props.onClick(11,12)}/>
            <Square id={"11_13"} value={this.props.squares[11][13]} onClick={() => this.props.onClick(11,13)}/>
            <Square id={"11_14"} value={this.props.squares[11][14]} onClick={() => this.props.onClick(11,14)}/>
            <Square id={"11_15"} value={this.props.squares[11][15]} onClick={() => this.props.onClick(11,15)}/>
            <Square id={"11_16"} value={this.props.squares[11][16]} onClick={() => this.props.onClick(11,16)}/>
            <Square id={"11_17"} value={this.props.squares[11][17]} onClick={() => this.props.onClick(11,17)}/>
            <Square id={"11_18"} value={this.props.squares[11][18]} onClick={() => this.props.onClick(11,18)}/>
            </div>
            <div className="board-row">
            <Square id={"12_0"} value={this.props.squares[12][0]} onClick={() => this.props.onClick(12,0)}/>
            <Square id={"12_1"} value={this.props.squares[12][1]} onClick={() => this.props.onClick(12,1)}/>
            <Square id={"12_2"} value={this.props.squares[12][2]} onClick={() => this.props.onClick(12,2)}/>
            <Square id={"12_3"} value={this.props.squares[12][3]} onClick={() => this.props.onClick(12,3)}/>
            <Square id={"12_4"} value={this.props.squares[12][4]} onClick={() => this.props.onClick(12,4)}/>
            <Square id={"12_5"} value={this.props.squares[12][5]} onClick={() => this.props.onClick(12,5)}/>
            <Square id={"12_6"} value={this.props.squares[12][6]} onClick={() => this.props.onClick(12,6)}/>
            <Square id={"12_7"} value={this.props.squares[12][7]} onClick={() => this.props.onClick(12,7)}/>
            <Square id={"12_8"} value={this.props.squares[12][8]} onClick={() => this.props.onClick(12,8)}/>
            <Square id={"12_9"} value={this.props.squares[12][9]} onClick={() => this.props.onClick(12,9)}/>
            <Square id={"12_10"} value={this.props.squares[12][10]} onClick={() => this.props.onClick(12,10)}/>
            <Square id={"12_11"} value={this.props.squares[12][11]} onClick={() => this.props.onClick(12,11)}/>
            <Square id={"12_12"} value={this.props.squares[12][12]} onClick={() => this.props.onClick(12,12)}/>
            <Square id={"12_13"} value={this.props.squares[12][13]} onClick={() => this.props.onClick(12,13)}/>
            <Square id={"12_14"} value={this.props.squares[12][14]} onClick={() => this.props.onClick(12,14)}/>
            <Square id={"12_15"} value={this.props.squares[12][15]} onClick={() => this.props.onClick(12,15)}/>
            <Square id={"12_16"} value={this.props.squares[12][16]} onClick={() => this.props.onClick(12,16)}/>
            <Square id={"12_17"} value={this.props.squares[12][17]} onClick={() => this.props.onClick(12,17)}/>
            <Square id={"12_18"} value={this.props.squares[12][18]} onClick={() => this.props.onClick(12,18)}/>
            </div>
            <div className="board-row">
            <Square id={"13_0"} value={this.props.squares[13][0]} onClick={() => this.props.onClick(13,0)}/>
            <Square id={"13_1"} value={this.props.squares[13][1]} onClick={() => this.props.onClick(13,1)}/>
            <Square id={"13_2"} value={this.props.squares[13][2]} onClick={() => this.props.onClick(13,2)}/>
            <Square id={"13_3"} value={this.props.squares[13][3]} onClick={() => this.props.onClick(13,3)}/>
            <Square id={"13_4"} value={this.props.squares[13][4]} onClick={() => this.props.onClick(13,4)}/>
            <Square id={"13_5"} value={this.props.squares[13][5]} onClick={() => this.props.onClick(13,5)}/>
            <Square id={"13_6"} value={this.props.squares[13][6]} onClick={() => this.props.onClick(13,6)}/>
            <Square id={"13_7"} value={this.props.squares[13][7]} onClick={() => this.props.onClick(13,7)}/>
            <Square id={"13_8"} value={this.props.squares[13][8]} onClick={() => this.props.onClick(13,8)}/>
            <Square id={"13_9"} value={this.props.squares[13][9]} onClick={() => this.props.onClick(13,9)}/>
            <Square id={"13_10"} value={this.props.squares[13][10]} onClick={() => this.props.onClick(13,10)}/>
            <Square id={"13_11"} value={this.props.squares[13][11]} onClick={() => this.props.onClick(13,11)}/>
            <Square id={"13_12"} value={this.props.squares[13][12]} onClick={() => this.props.onClick(13,12)}/>
            <Square id={"13_13"} value={this.props.squares[13][13]} onClick={() => this.props.onClick(13,13)}/>
            <Square id={"13_14"} value={this.props.squares[13][14]} onClick={() => this.props.onClick(13,14)}/>
            <Square id={"13_15"} value={this.props.squares[13][15]} onClick={() => this.props.onClick(13,15)}/>
            <Square id={"13_16"} value={this.props.squares[13][16]} onClick={() => this.props.onClick(13,16)}/>
            <Square id={"13_17"} value={this.props.squares[13][17]} onClick={() => this.props.onClick(13,17)}/>
            <Square id={"13_18"} value={this.props.squares[13][18]} onClick={() => this.props.onClick(13,18)}/>
            </div>
            <div className="board-row">
            <Square id={"14_0"} value={this.props.squares[14][0]} onClick={() => this.props.onClick(14,0)}/>
            <Square id={"14_1"} value={this.props.squares[14][1]} onClick={() => this.props.onClick(14,1)}/>
            <Square id={"14_2"} value={this.props.squares[14][2]} onClick={() => this.props.onClick(14,2)}/>
            <Square id={"14_3"} value={this.props.squares[14][3]} onClick={() => this.props.onClick(14,3)}/>
            <Square id={"14_4"} value={this.props.squares[14][4]} onClick={() => this.props.onClick(14,4)}/>
            <Square id={"14_5"} value={this.props.squares[14][5]} onClick={() => this.props.onClick(14,5)}/>
            <Square id={"14_6"} value={this.props.squares[14][6]} onClick={() => this.props.onClick(14,6)}/>
            <Square id={"14_7"} value={this.props.squares[14][7]} onClick={() => this.props.onClick(14,7)}/>
            <Square id={"14_8"} value={this.props.squares[14][8]} onClick={() => this.props.onClick(14,8)}/>
            <Square id={"14_9"} value={this.props.squares[14][9]} onClick={() => this.props.onClick(14,9)}/>
            <Square id={"14_10"} value={this.props.squares[14][10]} onClick={() => this.props.onClick(14,10)}/>
            <Square id={"14_11"} value={this.props.squares[14][11]} onClick={() => this.props.onClick(14,11)}/>
            <Square id={"14_12"} value={this.props.squares[14][12]} onClick={() => this.props.onClick(14,12)}/>
            <Square id={"14_13"} value={this.props.squares[14][13]} onClick={() => this.props.onClick(14,13)}/>
            <Square id={"14_14"} value={this.props.squares[14][14]} onClick={() => this.props.onClick(14,14)}/>
            <Square id={"14_15"} value={this.props.squares[14][15]} onClick={() => this.props.onClick(14,15)}/>
            <Square id={"14_16"} value={this.props.squares[14][16]} onClick={() => this.props.onClick(14,16)}/>
            <Square id={"14_17"} value={this.props.squares[14][17]} onClick={() => this.props.onClick(14,17)}/>
            <Square id={"14_18"} value={this.props.squares[14][18]} onClick={() => this.props.onClick(14,18)}/>
            </div>
            <div className="board-row">
            <Square id={"15_0"} value={this.props.squares[15][0]} onClick={() => this.props.onClick(15,0)}/>
            <Square id={"15_1"} value={this.props.squares[15][1]} onClick={() => this.props.onClick(15,1)}/>
            <Square id={"15_2"} value={this.props.squares[15][2]} onClick={() => this.props.onClick(15,2)}/>
            <Square id={"15_3"} value={this.props.squares[15][3]} onClick={() => this.props.onClick(15,3)}/>
            <Square id={"15_4"} value={this.props.squares[15][4]} onClick={() => this.props.onClick(15,4)}/>
            <Square id={"15_5"} value={this.props.squares[15][5]} onClick={() => this.props.onClick(15,5)}/>
            <Square id={"15_6"} value={this.props.squares[15][6]} onClick={() => this.props.onClick(15,6)}/>
            <Square id={"15_7"} value={this.props.squares[15][7]} onClick={() => this.props.onClick(15,7)}/>
            <Square id={"15_8"} value={this.props.squares[15][8]} onClick={() => this.props.onClick(15,8)}/>
            <Square id={"15_9"} value={this.props.squares[15][9]} onClick={() => this.props.onClick(15,9)}/>
            <Square id={"15_10"} value={this.props.squares[15][10]} onClick={() => this.props.onClick(15,10)}/>
            <Square id={"15_11"} value={this.props.squares[15][11]} onClick={() => this.props.onClick(15,11)}/>
            <Square id={"15_12"} value={this.props.squares[15][12]} onClick={() => this.props.onClick(15,12)}/>
            <Square id={"15_13"} value={this.props.squares[15][13]} onClick={() => this.props.onClick(15,13)}/>
            <Square id={"15_14"} value={this.props.squares[15][14]} onClick={() => this.props.onClick(15,14)}/>
            <Square id={"15_15"} value={this.props.squares[15][15]} onClick={() => this.props.onClick(15,15)}/>
            <Square id={"15_16"} value={this.props.squares[15][16]} onClick={() => this.props.onClick(15,16)}/>
            <Square id={"15_17"} value={this.props.squares[15][17]} onClick={() => this.props.onClick(15,17)}/>
            <Square id={"15_18"} value={this.props.squares[15][18]} onClick={() => this.props.onClick(15,18)}/>
            </div>
            <div className="board-row">
            <Square id={"16_0"} value={this.props.squares[16][0]} onClick={() => this.props.onClick(16,0)}/>
            <Square id={"16_1"} value={this.props.squares[16][1]} onClick={() => this.props.onClick(16,1)}/>
            <Square id={"16_2"} value={this.props.squares[16][2]} onClick={() => this.props.onClick(16,2)}/>
            <Square id={"16_3"} value={this.props.squares[16][3]} onClick={() => this.props.onClick(16,3)}/>
            <Square id={"16_4"} value={this.props.squares[16][4]} onClick={() => this.props.onClick(16,4)}/>
            <Square id={"16_5"} value={this.props.squares[16][5]} onClick={() => this.props.onClick(16,5)}/>
            <Square id={"16_6"} value={this.props.squares[16][6]} onClick={() => this.props.onClick(16,6)}/>
            <Square id={"16_7"} value={this.props.squares[16][7]} onClick={() => this.props.onClick(16,7)}/>
            <Square id={"16_8"} value={this.props.squares[16][8]} onClick={() => this.props.onClick(16,8)}/>
            <Square id={"16_9"} value={this.props.squares[16][9]} onClick={() => this.props.onClick(16,9)}/>
            <Square id={"16_10"} value={this.props.squares[16][10]} onClick={() => this.props.onClick(16,10)}/>
            <Square id={"16_11"} value={this.props.squares[16][11]} onClick={() => this.props.onClick(16,11)}/>
            <Square id={"16_12"} value={this.props.squares[16][12]} onClick={() => this.props.onClick(16,12)}/>
            <Square id={"16_13"} value={this.props.squares[16][13]} onClick={() => this.props.onClick(16,13)}/>
            <Square id={"16_14"} value={this.props.squares[16][14]} onClick={() => this.props.onClick(16,14)}/>
            <Square id={"16_15"} value={this.props.squares[16][15]} onClick={() => this.props.onClick(16,15)}/>
            <Square id={"16_16"} value={this.props.squares[16][16]} onClick={() => this.props.onClick(16,16)}/>
            <Square id={"16_17"} value={this.props.squares[16][17]} onClick={() => this.props.onClick(16,17)}/>
            <Square id={"16_18"} value={this.props.squares[16][18]} onClick={() => this.props.onClick(16,18)}/>
            </div>
            <div className="board-row">
            <Square id={"17_0"} value={this.props.squares[17][0]} onClick={() => this.props.onClick(17,0)}/>
            <Square id={"17_1"} value={this.props.squares[17][1]} onClick={() => this.props.onClick(17,1)}/>
            <Square id={"17_2"} value={this.props.squares[17][2]} onClick={() => this.props.onClick(17,2)}/>
            <Square id={"17_3"} value={this.props.squares[17][3]} onClick={() => this.props.onClick(17,3)}/>
            <Square id={"17_4"} value={this.props.squares[17][4]} onClick={() => this.props.onClick(17,4)}/>
            <Square id={"17_5"} value={this.props.squares[17][5]} onClick={() => this.props.onClick(17,5)}/>
            <Square id={"17_6"} value={this.props.squares[17][6]} onClick={() => this.props.onClick(17,6)}/>
            <Square id={"17_7"} value={this.props.squares[17][7]} onClick={() => this.props.onClick(17,7)}/>
            <Square id={"17_8"} value={this.props.squares[17][8]} onClick={() => this.props.onClick(17,8)}/>
            <Square id={"17_9"} value={this.props.squares[17][9]} onClick={() => this.props.onClick(17,9)}/>
            <Square id={"17_10"} value={this.props.squares[17][10]} onClick={() => this.props.onClick(17,10)}/>
            <Square id={"17_11"} value={this.props.squares[17][11]} onClick={() => this.props.onClick(17,11)}/>
            <Square id={"17_12"} value={this.props.squares[17][12]} onClick={() => this.props.onClick(17,12)}/>
            <Square id={"17_13"} value={this.props.squares[17][13]} onClick={() => this.props.onClick(17,13)}/>
            <Square id={"17_14"} value={this.props.squares[17][14]} onClick={() => this.props.onClick(17,14)}/>
            <Square id={"17_15"} value={this.props.squares[17][15]} onClick={() => this.props.onClick(17,15)}/>
            <Square id={"17_16"} value={this.props.squares[17][16]} onClick={() => this.props.onClick(17,16)}/>
            <Square id={"17_17"} value={this.props.squares[17][17]} onClick={() => this.props.onClick(17,17)}/>
            <Square id={"17_18"} value={this.props.squares[17][18]} onClick={() => this.props.onClick(17,18)}/>
            </div>
            <div className="board-row">
            <Square id={"18_0"} value={this.props.squares[18][0]} onClick={() => this.props.onClick(18,0)}/>
            <Square id={"18_1"} value={this.props.squares[18][1]} onClick={() => this.props.onClick(18,1)}/>
            <Square id={"18_2"} value={this.props.squares[18][2]} onClick={() => this.props.onClick(18,2)}/>
            <Square id={"18_3"} value={this.props.squares[18][3]} onClick={() => this.props.onClick(18,3)}/>
            <Square id={"18_4"} value={this.props.squares[18][4]} onClick={() => this.props.onClick(18,4)}/>
            <Square id={"18_5"} value={this.props.squares[18][5]} onClick={() => this.props.onClick(18,5)}/>
            <Square id={"18_6"} value={this.props.squares[18][6]} onClick={() => this.props.onClick(18,6)}/>
            <Square id={"18_7"} value={this.props.squares[18][7]} onClick={() => this.props.onClick(18,7)}/>
            <Square id={"18_8"} value={this.props.squares[18][8]} onClick={() => this.props.onClick(18,8)}/>
            <Square id={"18_9"} value={this.props.squares[18][9]} onClick={() => this.props.onClick(18,9)}/>
            <Square id={"18_10"} value={this.props.squares[18][10]} onClick={() => this.props.onClick(18,10)}/>
            <Square id={"18_11"} value={this.props.squares[18][11]} onClick={() => this.props.onClick(18,11)}/>
            <Square id={"18_12"} value={this.props.squares[18][12]} onClick={() => this.props.onClick(18,12)}/>
            <Square id={"18_13"} value={this.props.squares[18][13]} onClick={() => this.props.onClick(18,13)}/>
            <Square id={"18_14"} value={this.props.squares[18][14]} onClick={() => this.props.onClick(18,14)}/>
            <Square id={"18_15"} value={this.props.squares[18][15]} onClick={() => this.props.onClick(18,15)}/>
            <Square id={"18_16"} value={this.props.squares[18][16]} onClick={() => this.props.onClick(18,16)}/>
            <Square id={"18_17"} value={this.props.squares[18][17]} onClick={() => this.props.onClick(18,17)}/>
            <Square id={"18_18"} value={this.props.squares[18][18]} onClick={() => this.props.onClick(18,18)}/>
            </div>

            </div>
        );
    }
}

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
        //squares는 그냥 {null, null, null, ... null}
    }

    handleClick(i,j) {
        const squares = this.state.squares.slice(); //squares를 copy함.
        if ( squares[i][j] !== '-' || this.state.winner != null) return;

        squares[i][j] =this.state.oIsNext ? 'O' : 'X';

        this.setState({
            squares: squares,
            oIsNext: !this.state.oIsNext,
            winner: calculateWinner(squares, i, j),
        });
    }

    restart(){
        const squares = this.state.squares.slice();

        for(var i=0;i<size;i++){
            for(var j=0; j<size; j++)
                squares[i][j] = '-';
        }
        this.setState({
            squares: squares,
            oIsNext: true,
            winner: null,
        });
    }

    render() {
        let status;
        if (this.state.winner) {
            status = this.state.winner + ' Win';
        } else {
            status = 'Next ' + (this.state.oIsNext ? 'O' : 'X');
        }
        return (
            <div className="game">

                <div className="game-board">
                <button id="restart" onClick={()=>this.restart()}>
                        restart
                </button>
                <div id='status_label'><h2>{status}</h2></div>
                    <Board
                        squares={this.state.squares}
                        onClick={(i,j) => this.handleClick(i,j)}
                    />
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
        if(j+k<=size-1 && j+k-4>=0){
                if(val===squares[i][j+k] &&
                    val===squares[i][j+k-1] &&
                    val===squares[i][j+k-2] &&
                    val===squares[i][j+k-3] &&
                    val===squares[i][j+k-4]) return val;
        }
    }

    //위아래 체크
    for(let k=0; k<=4; k++){
        if(i+k<=size-1 && i+k-4>=0){
                if(val===squares[i+k][j] &&
                    val===squares[i+k-1][j] &&
                    val===squares[i+k-2][j] &&
                    val===squares[i+k-3][j] &&
                    val===squares[i+k-4][j]) return val;
        }
    }

    //왼쪽위-오른쪽아래 대각선 체크
    for(let k=0; k<=4; k++){
        if(i+k<=size-1 && j+k<=size-1 && i+k-4>=0 && j+k-4>=0){
                if(val===squares[i+k][j+k] &&
                    val===squares[i+k-1][j+k-1] &&
                    val===squares[i+k-2][j+k-2] &&
                    val===squares[i+k-3][j+k-3] &&
                    val===squares[i+k-4][j+k-4]) return val;
        }
    }

    //왼쪽아래-오른쪽위 대각선 체크
    for(let k=0; k<=4; k++){
        if(i+k<=size-1 && j-k+4<=size-1 && i+k-4>=0 && j-k>=0){
                if(val===squares[i+k][j-k] &&
                    val===squares[i+k-1][j-k+1] &&
                    val===squares[i+k-2][j-k+2] &&
                    val===squares[i+k-3][j-k+3] &&
                    val===squares[i+k-4][j-k+4]) return val;
        }
    }

    return null;
}
