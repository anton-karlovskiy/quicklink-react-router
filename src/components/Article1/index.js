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

const Article1 = () => {
  return (
    <article id="post">
      <section>
        <div className="img-container left column">
          <img src="https://cdn.glitch.com/8a455d85-8f99-42e6-837b-dfc94b62b2b9%2Fworld.jpg?v=1561649029292" alt="Looking up at skyscrapers" />
        </div>
        <div className="right column">
          <h2 className="headline">Article 1</h2>
          <p className="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam volutpat
          tincidunt condimentum. Cras convallis purus ut fringilla iaculis. Mauris
          mauris sapien, molestie vitae enim vitae, faucibus volutpat dui. Proin
          iaculis accumsan risus, in auctor magna malesuada quis. Quisque velit
          metus, sagittis a pellentesque id, posuere nec dui. Morbi vel eros
          convallis, cursus tortor quis, consequat massa.
          </p>
        </div>
      </section>
    </article>
  );
};

export default Article1;