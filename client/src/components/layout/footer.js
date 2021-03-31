import React from 'react';

export class Footer extends React.Component {    
    render() {
      return (
        <div>
          <div class="jumbotron text-center">
            <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <h3>Contact</h3>
                    <div>
                        Phone: 123-456-7891
                    </div>
                </div>
                <div className="col-md-4">
                    <h3>Location</h3>
                    <div>
                        123 Main St Falls Church, VA
                    </div>
                </div>
                <div className="col-md-4">
                    <h3>Hours</h3>
                    <div className="footer">
                        <div className="">
                            M-F: 10-8
                        </div>
                        <div className="">
                            Sat: 10-10
                        </div>
                        <div className="">
                            Sun: 10-7
                        </div>
                    </div>
                    
                </div>
                    
            </div>
                
            </div>
          </div>
        </div>
      );
    }
  }