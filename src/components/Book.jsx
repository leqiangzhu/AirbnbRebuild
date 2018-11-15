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
       }

       input {
        display: table-cell !important;
        width: 100% !important;
        vertical-align: middle !important;
        border-radius: 4px;
        height: 46px;
       }

        `}</style>
            <div id="bookForm">
                <div id="headline">
                    <h1 >Book unique homes and experiences.</h1>
                </div>
                <form>
                    <label>
                        WHERE
                        <input type="text" name="where" />
                    </label>
                    <div>
                        <label>
                            CHECK IN
                        <input type="text" name="checkIn" />
                        </label>
                        <label>
                            CHECK OUT
                        <input type="text" name="checkOut" />
                        </label>
                    </div>
                    <label>
                        GUESTS
                        <select>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
    )
}

// Book.PropTypes = {
//     navItems: PropTypes.string.isRequired
// };

export default Book;