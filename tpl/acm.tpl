
                <h1><%= title %></h1>
                <p><%= tab %></p>
                <hr>
                <div id="description">
                    <%
                    let numintro=intro;
                    for (let index = 0; index < 1*numintro; index++) {
                        const intro = intro[index];%>
                    <p><%=intro%></p>
                    <%}%> 
                </div>
                <div id="input">
                    <blockquote>
                        <p>Sample Input<br>
                            <%
                            let numin=inputn;
                            for (let index = 0; index < 1*numin; index++) {
                                const inputtxt = input[index];%> 
                            <%=inputtxt%><br>
                            <%} %> 
                        </p>
                    </blockquote>
                </div>
                <div id="out">
                    <blockquote>
                        <p>Sample Output<br>
                            <%
                            let numout=outputn;
                            for (let index = 0; index < 1*numout; index++) {
                                const outputtxt = output[index];%>
                                <%=outputtxt%><br>
                            <%}%> 
                        </p>
                    </blockquote>
                </div>
                <div id="explain">
                    <%let codenum=coden[0]*1;codeindex=1;numex=explann;
                    let nowindex=0;
                    if (codenum>0) {
                            let codearray=coden;
                            nowindex=codearray[codeindex];
                        }
                    for (let index = 0; index < 1*numex; index++) {
                        const explantxt = explan[index];%>
                        <p><%=explantxt%></p>
                        <%
                        if (codenum>0&&(nowindex*1==index)) {%>
                            <div id="example">
                            <blockquote>
                            <p><%for (let x = 1; x <= 1*code[codeindex][0]; x++) {%>
                                <%=code[codeindex][x]%><br>
                                <%}%>
                            </p>
                            </blockquote></div>
                            <%codeindex++;
                            }
                    }%>
                    <h3><%=answertxt%></h3>

