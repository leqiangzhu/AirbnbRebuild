import React from 'react';
// import PropTypes from 'prop-types';
export function Book() {

    return (
        <div>
            <style jsx>{`
        #bookForm   {
            width:100px;
            background-color: white;
            border-radius: 4px !important;
            padding: 32px !important;
            padding-bottom: 24px !important;
            width: 441px !important;
            box-shadow: 0 16px 40px rgba(0,0,0,0.12) !important;
            margin-left: 200px;
        }
       
        #headline   {
        font-size: 1em !important;
        font-weight: inherit !important;
        line-height: inherit !important;
       }
        
       label {
        background: transparent !important;
        border: 0px !important;
        cursor: pointer !important;
        display: block !important;
        padding: 0px !important;
        margin: auto;
       }

       input {
        display: table-cell !important;
        width: 100% !important;
        vertical-align: middle !important;
        border-radius: 4px;
        height: 46px;
        margin-top: 10px;
        margin-bottom: 10px;
        
       }

       #check-in-out{
        width: 100%;
         display: flex;
       }
       select{
           height:50px;
           width:100%;
           background-color: transparent;
       }
       button{
           height: 46px;
           width:146px;
           background-color:#FF5A5F;
           color:white;
           border-radius: 4px;
           text-align: center;
           margin-right: 200px;
       }
    
       #button-container {
           position: relative;
           left: 200px;
           text-align: right;
       }
       p {
       color:white;
        margin-left: 350px;

         }
        //  .bookfooter {
        //      text-align: center;
        //  }
         img {
             width: 15px;
             margin-right: 5px;
         }
        `}</style>
        <div>
            <div id="bookForm">
            
                <div id="headline">
                    <h1 >Book unique homes and experiences.</h1>
                </div>
                <form>
                    <label>
                        WHERE
                        <input type="text" name="where" />
                    </label>
                    <div id="check-in-out">
                        <label>
                            CHECK IN
                        <input type="date" name="checkIn" />
                        </label>
                        <label>
                            CHECK OUT
                        <input type="date" name="checkOut" />
                        </label>
                    </div>
                    <label>
                        GUESTS
                        <br />
                        <br />
                        <select placeholder="232">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </label>
                    <br />
                    <br />
                    <div id="button-container">
                        <button type="submit" value="Submit">Submit</button>
                    </div>
                </form>

            </div>
            <div class="bookfooter">
                <p><img src='https://image.flaticon.com/icons/svg/25/25694.svg'></img>Earn money while you travel</p>
            </div>
            </div>

        </div>
    )
}

// Book.PropTypes = {
//     navItems: PropTypes.string.isRequired
// };

export default Book;