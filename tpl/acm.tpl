
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
                    <%let codenum=coden[0]*1;
                    let codenindex=1;
                    let numex=explann*1;
                    let exindex=0;
                    if (codenum>0) {
                            let codearray=coden;
                            exindex=codearray[codenindex]*1;
                        }
                    for (let index = 0; index < numex; index++) {
                        const explantxt = explan[index];%>
                        <p><%=explantxt%></p>
                        <%if ((exindex==index+1)&&codenum>0) {%>
                            <div id="example">
                            <blockquote>
                            <p><%for (let x = 1; x <= code[codenindex-1][0]; x++) {%>
                                <%=code[codenindex-1][x]%><br>
                                <%}%>
                            </p>
                            </blockquote></div>
                            <%codenindex++;codenum--;
                            if (codenum>0) {
                                exindex=codearray[codenindex]*1;
                            }
                        }
                    }%>
                    <h3><%=answertxt%></h3>

