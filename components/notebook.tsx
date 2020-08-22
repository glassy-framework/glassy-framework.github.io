import React from "react";

export default function Notebook(): JSX.Element {
  return (
    <div className="macbook-wrapper">
      <div className="macbook-screen">
        <div className="line-number-col">
          1<br />
          2<br />
          3<br />
          4<br />
          5<br />
          6<br />
          7<br />
          8<br />
          9<br />
          10
          <br />
          11
          <br />
          12
          <br />
          13
          <br />
          14
          <br />
          15
          <br />
        </div>
        <div className="editor">
          <span className="fg_solr_red">require &quot;</span>
          <span className="fg_solr_green">glassy-http</span>
          <span className="fg_solr_red">&quot;</span>
          <br />
          <br />
          <span className="fg_solr_red">class </span>
          <span className="fg_solr_orange">HomeController</span> &#x3C;
          <span className="fg_solr_orange"> Glassy::Http::Controller</span>
          <br />
          <span>&nbsp;&nbsp;</span>
          <span className="fg_solr_red">@[</span>
          <span className="fg_solr_orange">Route</span>(
          <span className="fg_solr_red">&quot;</span>
          <span className="fg_solr_green">GET</span>
          <span className="fg_solr_red">&quot;</span>
          <span>, </span>
          <span className="fg_solr_red">&quot;</span>
          <span className="fg_solr_green">/</span>
          <span className="fg_solr_red">&quot;</span>)
          <span className="fg_solr_red">]</span>
          <br />
          <span>&nbsp;&nbsp;</span>
          <span className="fg_solr_red">def</span>
          <span className="fg_solr_blue"> index</span>
          <br />
          <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <span className="fg_solr_red">&quot;</span>
          <span className="fg_solr_green">Hello World!</span>
          <span className="fg_solr_red">&quot;</span>
          <br />
          <span>&nbsp;&nbsp;</span>
          <span className="fg_solr_red">end</span>
          <br />
          <span className="fg_solr_red">end</span>
          <br />
        </div>
      </div>
    </div>
  );
}
