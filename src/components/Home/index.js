/*
Copyright 2018 Google Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import React from 'react';

const World = () => {
  return (
    <article>
      <h1>News</h1>
      <section>
        <div className="img-container left column">
          <img src="https://cdn.glitch.com/2feb9fb8-169d-4ea0-9d82-ece1d1199861/business.jpg?v=1560086774114" alt="A person reading the business section of a newspaper" />
        </div>
        <div className="right column">
          <h2 className="headline">Headline</h2>
          <p className="content">
            I love cheese, especially manchego swiss. ☺ Fromage queso jarlsberg cheesy
            feet emmental cottage cheese camembert de normandie bocconcini. Cottage cheese
            everyone loves cauliflower cheese rubber cheese squirty cheese halloumi cow
            fondue. Bocconcini cheese and biscuits everyone loves fondue red leicester
            st. agur blue cheese rubber cheese ricotta. Cheesy grin mozzarella.
          </p>
        </div>
      </section>
      <section>
        <div className="left column">
          <h4 className="list-title">Trending Articles</h4>
          <ul className="vertical-list">
            <li className="list-item"><a href="pages/article1.html" className="post-link">Article 1</a></li>
            <li className="list-item"><a href="pages/article2.html" className="post-link">Article 2</a></li>
            <li className="list-item"><a href="pages/article3.html" className="post-link">Article 3</a></li>
            <li className="list-item"><a href="pages/article4.html" className="post-link">Article 4</a></li>
            <li className="list-item"><a href="pages/article-missing.html" className="post-link">Non-existent article</a></li>
          </ul>
        </div>
        <div className="right column">
          <h4 className="list-title">Archived Posts</h4>
          <ul className="vertical-list">
            <li className="list-item"><a href="pages/post1.html" className="post-link">Archived Post 1</a></li>
            <li className="list-item"><a href="pages/post2.html" className="post-link">Archived Post 2</a></li>
            <li className="list-item"><a href="pages/post3.html" className="post-link">Archived Post 3</a></li>
            <li className="list-item"><a href="pages/post-missing.html" className="post-link">Non-existent Post 4</a></li>
          </ul>
        </div>
      </section>
    </article>
  );
};

export default World;