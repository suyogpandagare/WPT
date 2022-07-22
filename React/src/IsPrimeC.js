import { Component } from "react";

export default class IsPrime extends Component
{
    render()
    {
        let n = this.props.num;
        console.log(n)

        
			
			if(n == 1) {
                return (<div>The Number is not-prime</div>)

			}
			if(n == 2 || n == 3) {
                return (<div>The Number is prime</div>)

			}
			if(n%2==0 || n%3==0) {
                return (<div>The Number is not-prime</div>)

			}
				
			for (var i = 5; i*i <= n; i=i+6) {
				if(n%i==0 || n%(i+2)==0) {
                    return (<div>The Number is not-prime</div>)

				}
			}
            return (<div>The Number is prime</div>)

		
    }



    
}