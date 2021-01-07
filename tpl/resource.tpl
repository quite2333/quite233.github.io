
                <h1><%= title %></h1>
                <p><%= tab %></p>
                <hr>
                <div id="description">
                    <%
                    let resn=num*1;
                    let resarray=commend;
                    let pnum=0;
                    let imgurl;
                    let parray;
                    let text;
                    for (let index = 0; index < resn; index++) {
                        const parray = resarray[index];
                        pnum=parray[0]*1;
                        text=(index+1)+'.'+parray[1];
                        %>
                        <h3><%=text%></h3>
                        <img class="commend" src="" alt="">
                        <%for (let x = 2; x <= pnum; x++){
                            const ptxt = parray[x];
                            %>
                            <p><%=ptxt%></p>
                            <%}%>
                    
                    <%}%> 
                </div>
               

