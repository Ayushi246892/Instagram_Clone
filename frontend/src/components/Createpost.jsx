import React from 'react'
import "./Createpost.css";

const Createpost = () => {

  const loadfile = (event)=>{
     var output = document.getElementById('output');
     output.src = URL.createObjectURL(event.target.files[0]);
     output.onload = function(){
        URL.revokeObjectURL(output.src)
     }
  }

  return (
    <div className='createpost'>

        {/* header  */}
       <div className="post-header">
         <h4 style={{margin:"3px auto"}}>Create New Post</h4>
         <button id='post-btn'>
            Share
         </button>
       </div>

       {/* image preview  */}
       <div className="main-div">
        <img id='output' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKYAAACUCAMAAAAu5KLjAAAAY1BMVEX///8AAACWlpZ5eXl+fn76+vpycnL19fVjY2Nra2vg4OCampro6OhnZ2dvb2/IyMgODg66urogICCqqqru7u4yMjLCwsI9PT3U1NSEhIQaGhpJSUm0tLRcXFxPT08rKyuNjY0LK99sAAAD+0lEQVR4nO3c7XaiMBAGYBExCljkG0WU+7/KdbdbCWESQhhI6Mn7t/X41BoySQZ2OxsbGxsbG5tfGRIHe80JYjKCDN3EMSCJG4qUkW5fl0igvOrGdblynb5ByrfT5zDPumX9nGFlptvFJgOZqW4WmxRk3nSz2NxApqubxcYdZ5bHg4Ycy2nMNvTgcbZsvLCdwgxW5lHZyzNL3pV1hVS5NPO4Mo1O1kgz4Z+vE3KyTLxYJmYMYnrZOwSeQExhkihw6zzPm1tamctMn/fP++TNEGoEs3g5/ZzZCc8EZuAMUjJLM/1MDyy8k9gw5gFSvpeQhVHMGFY6zovei9HN9HOI+C90Raab2ULA79ypYaSZGYr20G7djKSZKdwFuHdXT83Mp4jpdIOdXLQyhUqnNYQZipm1IUxfzHxZ5i9kjmyePg1hjoz0bjdIM/MC6T7pZkvNTOFZTtkdA3ndCYAOZlYLmPvu9zQzRZP6i1oQ6WYS/qxOb6fqZu4qnrKhf2spZvVIC/gEh80DVta9NfAiTC/+XngfhSe2H+d9YHxf2fsr9UWYx5+X5NBGyyDFcD10Zv7AJZjU+iaR2q/32cOnlN3wWoDZ28SQc+78w2fEJ00w3JXDZxb9r1op9f18V8hF2rquGzwiqFcCnTkoyF9jLRoUxuMdj2Ezw5JlOk+5C5MwyEzvNFA6zmn+ESIy8wgomQnFACavkDjIfz9XYBbc7pXWICa3ipjvRGQCg5wK3KKxPjMTr2vmOfGY8CCn8oBfF1bV+IUVjQkcR7ApgJd5wTN5z+Kjzi8cJqe47QVocPP/VxxjV1YPhxmxB1Bw2PKz+pQpX+IrKw6TyCnZdhG6bhd/pVCYRLTa7oUu55lzK1c082MwvQmdX135mbGvagVODKbg0GSYn7VYOPwP7HlvgMKUGeRUkkdIiA8WKYIZYDYzgtavwtTnL868ypkBEJg+ahN3DL7HfGYmrDemh9fiPI85ZZBLJeFsQMxjThrkcoGds5hLNB7DGxBzmMs07teQsysTJzMr/pH9rECNoupM+Zl8aoANCHVmA70DTk4DpyoT7svByoUtP1WZC99dwHYIKzKLZZWD8lONWU2uNyanf1ODElN4OIaV3nJThemtoeyXySrMBWZyMNTnqcBc7xaixwwmt/kOP9dYmbnqLXhJpMj01xk+n1RKTLLgTA7mVakw179nLA+nM9e6FNG5htAQETHj5edIIHU2jSk6A1gyTzKBeci0fJZ/8yRdP/cYs4EO+laKK98Na0gsEzOWiRnLxIxlYsYyMWOZmLFMzFgmZmDmRh7mspFH42zkQUMbeWzTVh6CtZFHihnlFCi38ri73UYeHmhjY2NjY2Oz0fwBYd5P+ad/QmUAAAAASUVORK5CYII='/>
        <input type='file' accept='image/*' onChange={(event)=>{
            loadfile(event)
        }}/>
       </div>

       {/* details  */}
       <div className="details">
         <div className="card-header">
             <div className="card-pic">
                <img src='https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D' alt=''/>
             </div>

             <h5>rahir</h5>
         </div>
         <textarea type='text' placeholder='Write a caption....'>
            
         </textarea>
       </div>
    </div>
  )
}

export default Createpost
