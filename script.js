	const clickbtn = document.querySelector('.button')
	const clickbtn1 = document.querySelector('.button1')
	const main = document.querySelector('.main')
	const main2 = document.querySelector('.main2')
	const input =document.querySelector('.input')
	const input1 =document.querySelector('.input1')
	const output =document.querySelector('.output')
	const page =document.querySelector('.page')
	const output1 =document.querySelector('.output1')
	const logout =document.querySelector('.logout')
	const logout1 =document.querySelector('.logout1')
	const loader=document.querySelector(".loader")
	clickbtn.addEventListener('click',proceed1)
	clickbtn1.addEventListener('click',data1)
	logout1.addEventListener('click',logout2)
		
		function proceed1 (e) {
			e.preventDefault()
			if(input.value){
				main.classList.add("none")
		 main2.style.display='block'
		 output.innerText=input.value
			}
			else {
				input.placeholder="Enter an Email or Username or Phone"
				input.classList.add("redalert")
			}

		}
		function data1 (e){
			e.preventDefault()
			if(input1.value){
			main2.style.display='none'
			page.style.display='block'
			output1.innerText=input.value
		}
			else {
				input1.placeholder="Enter Your Password"
				input1.classList.add("redalert")
			}
		}

		function logout2(){
			
			page.style.display="none"
			loader.style.display="block"
			setTimeout(function(){ 
		    logout.style.display="block";
			 }, 1000);
			setTimeout(function(){ 
		    window.location.replace("index.html");
			 }, 1500);
			
			
		}

