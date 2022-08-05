---
layout: paper
tag: abrassart
category: 2022
date: 2022-01-01
title: And what if two musical versions don't share melody, harmony, rhythm, or lyrics ? 
authors: Mathilde Abrassart & Guillaume Doras
abstract: |
    Version identification (VI) has seen substantial progress over the past few years. 
    On the one hand, the introduction of the metric learning paradigm has favored the emergence of scalable yet accurate VI 
    systems. On the other hand, using features focusing on specific aspects of musical pieces, such as melody, harmony, or 
    lyrics, yielded interpretable and promising performances. In this work, we build upon these recent advances and propose 
    a metric learning-based system systematically leveraging four dimensions commonly admitted to convey musical similarity 
    between versions: melodic line, harmonic structure, rhythmic patterns, and lyrics. We describe our deliberately simple 
    model architecture, and we show in particular that an approximated representation of the lyrics is an efficient proxy to
    discriminate between versions and non-versions. We then describe how these features complement each other and yield new 
    state-of-the-art performances on two publicly available datasets. We finally suggest that a VI system using a 
    combination of melodic, harmonic, rhythmic and lyrics features could theoretically reach the optimal performances 
    obtainable on these datasets.
---

<p>Welcome to the companion web site of our paper "And what if two musical versions don't share melody, harmony, rhythm, or lyrics ?"
</p>

<h3>Train and test datasets</h3>
Coming soon...

<h3>Audio examples</h3>


In this section we provide some illustrative and contrastive examples between Ly, Rh and Me+Ha combination. We display the examples from the article with the YouTube links and some others.

##### Ly-Me+Ha examples

**Ly > Me+Ha**

<figure>
<img src="/assets/images/papers/2022/abrassart/you_rascal_you_final.jpg" width="800" />
<figcaption class="figure-caption text-left"><big>Fig.5.3.1.1. Ly better than Me+Ha- d<sub>Me+Ha</sub>=1.470, d<sub>Ly</sub>=0.238 </big></figcaption>
</figure>

<div class="clearfix">

<a href="https://www.youtube.com/watch?v=tvGMgafW3_o" class="text-decoration-none float-left">
<!-- <div class="fs-4 mb-3"> -->
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-music-note-beamed" viewBox="0 0 16 16">
  <path d="M6 13c0 1.105-1.12 2-2.5 2S1 14.105 1 13c0-1.104 1.12-2 2.5-2s2.5.896 2.5 2zm9-2c0 1.105-1.12 2-2.5 2s-2.5-.895-2.5-2 1.12-2 2.5-2 2.5.895 2.5 2z"/>
  <path fill-rule="evenodd" d="M14 11V2h1v9h-1zM6 3v10H5V3h1z"/>
  <path d="M5 2.905a1 1 0 0 1 .9-.995l8-.8a1 1 0 0 1 1.1.995V3L5 4V2.905z"/>
</svg>  Jimmy Noone's version
</a>

<a href="https://www.youtube.com/watch?v=34KQ_sQ7Emk" class="text-decoration-none float-right">
<!-- <div class="fs-4 mb-3"> -->
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-music-note-beamed" viewBox="0 0 16 16">
  <path d="M6 13c0 1.105-1.12 2-2.5 2S1 14.105 1 13c0-1.104 1.12-2 2.5-2s2.5.896 2.5 2zm9-2c0 1.105-1.12 2-2.5 2s-2.5-.895-2.5-2 1.12-2 2.5-2 2.5.895 2.5 2z"/>
  <path fill-rule="evenodd" d="M14 11V2h1v9h-1zM6 3v10H5V3h1z"/>
  <path d="M5 2.905a1 1 0 0 1 .9-.995l8-.8a1 1 0 0 1 1.1.995V3L5 4V2.905z"/>
</svg>  John Fogerty's version
</a>

</div>



<figure>
<img src="/assets/images/papers/2022/abrassart/i_natt.jpg" width="800" />
<figcaption class="figure-caption text-left"><big>Fig.5.3.1.2. Ly better than Me+Ha- d<sub>Me+Ha</sub>=1.448, d<sub>Ly</sub>=0.685 </big> </figcaption>
</figure>

<p>
<a href="https://www.youtube.com/watch?v=HNf3sigQzyU" class="text-decoration-none">
<!-- <div class="fs-4 mb-3"> -->
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-music-note-beamed" viewBox="0 0 16 16">
  <path d="M6 13c0 1.105-1.12 2-2.5 2S1 14.105 1 13c0-1.104 1.12-2 2.5-2s2.5.896 2.5 2zm9-2c0 1.105-1.12 2-2.5 2s-2.5-.895-2.5-2 1.12-2 2.5-2 2.5.895 2.5 2z"/>
  <path fill-rule="evenodd" d="M14 11V2h1v9h-1zM6 3v10H5V3h1z"/>
  <path d="M5 2.905a1 1 0 0 1 .9-.995l8-.8a1 1 0 0 1 1.1.995V3L5 4V2.905z"/>
</svg>  Asta Kask's version
</a>
</p>

<p>
<a href="https://www.youtube.com/watch?v=c0xyHIUnETY" class="text-decoration-none">
<!-- <div class="fs-4 mb-3"> -->
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-music-note-beamed" viewBox="0 0 16 16">
  <path d="M6 13c0 1.105-1.12 2-2.5 2S1 14.105 1 13c0-1.104 1.12-2 2.5-2s2.5.896 2.5 2zm9-2c0 1.105-1.12 2-2.5 2s-2.5-.895-2.5-2 1.12-2 2.5-2 2.5.895 2.5 2z"/>
  <path fill-rule="evenodd" d="M14 11V2h1v9h-1zM6 3v10H5V3h1z"/>
  <path d="M5 2.905a1 1 0 0 1 .9-.995l8-.8a1 1 0 0 1 1.1.995V3L5 4V2.905z"/>
</svg>  The Hep Stars' version
</a>
</p>


**Ly < Me+Ha**

<figure>
<img src="/assets/images/papers/2022/abrassart/nightshift_final.jpg" width="800" />
<figcaption class="figure-caption text-left"><big>Fig.5.3.1.3. Ly worse than Me+Ha- d<sub>Me+Ha</sub>=0.597, d<sub>Ly</sub>=1.282 </big></figcaption>
</figure>

<p>
<a href="https://www.youtube.com/watch?v=FrkEDe6Ljqs" class="text-decoration-none">
<!-- <div class="fs-4 mb-3"> -->
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-music-note-beamed" viewBox="0 0 16 16">
  <path d="M6 13c0 1.105-1.12 2-2.5 2S1 14.105 1 13c0-1.104 1.12-2 2.5-2s2.5.896 2.5 2zm9-2c0 1.105-1.12 2-2.5 2s-2.5-.895-2.5-2 1.12-2 2.5-2 2.5.895 2.5 2z"/>
  <path fill-rule="evenodd" d="M14 11V2h1v9h-1zM6 3v10H5V3h1z"/>
  <path d="M5 2.905a1 1 0 0 1 .9-.995l8-.8a1 1 0 0 1 1.1.995V3L5 4V2.905z"/>
</svg>  Jim Horn's version
</a>
</p>

<p>
<a href="https://www.youtube.com/watch?v=suAzpGfV0W0" class="text-decoration-none">
<!-- <div class="fs-4 mb-3"> -->
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-music-note-beamed" viewBox="0 0 16 16">
  <path d="M6 13c0 1.105-1.12 2-2.5 2S1 14.105 1 13c0-1.104 1.12-2 2.5-2s2.5.896 2.5 2zm9-2c0 1.105-1.12 2-2.5 2s-2.5-.895-2.5-2 1.12-2 2.5-2 2.5.895 2.5 2z"/>
  <path fill-rule="evenodd" d="M14 11V2h1v9h-1zM6 3v10H5V3h1z"/>
  <path d="M5 2.905a1 1 0 0 1 .9-.995l8-.8a1 1 0 0 1 1.1.995V3L5 4V2.905z"/>
</svg>  The Commodores' version
</a>
</p>

##### 5.3.2. Rh-Me+Ha examples

**Rh > Me+Ha**

<figure>
<img src="/assets/images/papers/2022/abrassart/pimpf_final.jpg" width="800" />
<figcaption class="figure-caption text-left"> <big> Fig.5.3.2.1. Rh better than Me+Ha - d<sub>Me+Ha</sub>=1.084, d<sub>Rh</sub>=0.459 </big></figcaption>
</figure>

<p>
<a href="https://www.youtube.com/watch?v=HKiDChbfycw" class="text-decoration-none">
<!-- <div class="fs-4 mb-3"> -->
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-music-note-beamed" viewBox="0 0 16 16">
  <path d="M6 13c0 1.105-1.12 2-2.5 2S1 14.105 1 13c0-1.104 1.12-2 2.5-2s2.5.896 2.5 2zm9-2c0 1.105-1.12 2-2.5 2s-2.5-.895-2.5-2 1.12-2 2.5-2 2.5.895 2.5 2z"/>
  <path fill-rule="evenodd" d="M14 11V2h1v9h-1zM6 3v10H5V3h1z"/>
  <path d="M5 2.905a1 1 0 0 1 .9-.995l8-.8a1 1 0 0 1 1.1.995V3L5 4V2.905z"/>
</svg>  SYZYGY's version
</a>
</p>

<p>
<a href="https://www.youtube.com/watch?v=MR_rqDxDInI" class="text-decoration-none">
<!-- <div class="fs-4 mb-3"> -->
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-music-note-beamed" viewBox="0 0 16 16">
  <path d="M6 13c0 1.105-1.12 2-2.5 2S1 14.105 1 13c0-1.104 1.12-2 2.5-2s2.5.896 2.5 2zm9-2c0 1.105-1.12 2-2.5 2s-2.5-.895-2.5-2 1.12-2 2.5-2 2.5.895 2.5 2z"/>
  <path fill-rule="evenodd" d="M14 11V2h1v9h-1zM6 3v10H5V3h1z"/>
  <path d="M5 2.905a1 1 0 0 1 .9-.995l8-.8a1 1 0 0 1 1.1.995V3L5 4V2.905z"/>
</svg>  Depeche Mode's version
</a>
</p>

<figure>
<img src="/assets/images/papers/2022/abrassart/mamas_little_baby.jpg" width="800" />
<figcaption class="figure-caption text-left"> <big>Fig.5.3.2.2. Rh better than Me+Ha - d<sub>Me+Ha</sub>=1.329, d<sub>Rh</sub>=0.714 </big></figcaption>
</figure>

<p>
<a href="https://www.youtube.com/watch?v=EOR9WtJP0MQ" class="text-decoration-none">
<!-- <div class="fs-4 mb-3"> -->
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-music-note-beamed" viewBox="0 0 16 16">
  <path d="M6 13c0 1.105-1.12 2-2.5 2S1 14.105 1 13c0-1.104 1.12-2 2.5-2s2.5.896 2.5 2zm9-2c0 1.105-1.12 2-2.5 2s-2.5-.895-2.5-2 1.12-2 2.5-2 2.5.895 2.5 2z"/>
  <path fill-rule="evenodd" d="M14 11V2h1v9h-1zM6 3v10H5V3h1z"/>
  <path d="M5 2.905a1 1 0 0 1 .9-.995l8-.8a1 1 0 0 1 1.1.995V3L5 4V2.905z"/>
</svg>  Robert Gordon's version (studio)
</a>
</p>

<p>
<a href="https://www.youtube.com/watch?v=v03xNv2m5ZE" class="text-decoration-none">
<!-- <div class="fs-4 mb-3"> -->
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-music-note-beamed" viewBox="0 0 16 16">
  <path d="M6 13c0 1.105-1.12 2-2.5 2S1 14.105 1 13c0-1.104 1.12-2 2.5-2s2.5.896 2.5 2zm9-2c0 1.105-1.12 2-2.5 2s-2.5-.895-2.5-2 1.12-2 2.5-2 2.5.895 2.5 2z"/>
  <path fill-rule="evenodd" d="M14 11V2h1v9h-1zM6 3v10H5V3h1z"/>
  <path d="M5 2.905a1 1 0 0 1 .9-.995l8-.8a1 1 0 0 1 1.1.995V3L5 4V2.905z"/>
</svg>  The Hot Rocks' version (live)
</a>
</p>

**Rh < Me+Ha**

<figure>
<img src="/assets/images/papers/2022/abrassart/kenties_final.jpg" width="800" />
<figcaption class="figure-caption text-left"><big>Fig.5.3.2.3. Rh worse than Me+Ha - d<sub>Me+Ha</sub>=0.498, d<sub>Rh</sub>=1.380 </big> </figcaption>
</figure>


<p>
<a href="https://www.youtube.com/watch?v=S7ezTO63BTw" class="text-decoration-none">
<!-- <div class="fs-4 mb-3"> -->
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-music-note-beamed" viewBox="0 0 16 16">
  <path d="M6 13c0 1.105-1.12 2-2.5 2S1 14.105 1 13c0-1.104 1.12-2 2.5-2s2.5.896 2.5 2zm9-2c0 1.105-1.12 2-2.5 2s-2.5-.895-2.5-2 1.12-2 2.5-2 2.5.895 2.5 2z"/>
  <path fill-rule="evenodd" d="M14 11V2h1v9h-1zM6 3v10H5V3h1z"/>
  <path d="M5 2.905a1 1 0 0 1 .9-.995l8-.8a1 1 0 0 1 1.1.995V3L5 4V2.905z"/>
</svg>  Henry Theel's version
</a>
</p>

<p>
<a href="https://www.youtube.com/watch?v=7kvFZwePmyU" class="text-decoration-none">
<!-- <div class="fs-4 mb-3"> -->
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-music-note-beamed" viewBox="0 0 16 16">
  <path d="M6 13c0 1.105-1.12 2-2.5 2S1 14.105 1 13c0-1.104 1.12-2 2.5-2s2.5.896 2.5 2zm9-2c0 1.105-1.12 2-2.5 2s-2.5-.895-2.5-2 1.12-2 2.5-2 2.5.895 2.5 2z"/>
  <path fill-rule="evenodd" d="M14 11V2h1v9h-1zM6 3v10H5V3h1z"/>
  <path d="M5 2.905a1 1 0 0 1 .9-.995l8-.8a1 1 0 0 1 1.1.995V3L5 4V2.905z"/>
</svg>  Eino Grön's version
</a>
</p>

<figure>
<img src="/assets/images/papers/2022/abrassart/anybody_know_my_name.jpg" width="800" />
<figcaption class="figure-caption text-left"> <big>Fig.5.3.2.4. Rh worse than Me+Ha - d<sub>Me+Ha</sub>=0.526, d<sub>Rh</sub>=1.476 </big></figcaption>
</figure>

<p>
<a href="https://www.youtube.com/watch?v=f_chTfU52zQ" class="text-decoration-none">
<!-- <div class="fs-4 mb-3"> -->
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-music-note-beamed" viewBox="0 0 16 16">
  <path d="M6 13c0 1.105-1.12 2-2.5 2S1 14.105 1 13c0-1.104 1.12-2 2.5-2s2.5.896 2.5 2zm9-2c0 1.105-1.12 2-2.5 2s-2.5-.895-2.5-2 1.12-2 2.5-2 2.5.895 2.5 2z"/>
  <path fill-rule="evenodd" d="M14 11V2h1v9h-1zM6 3v10H5V3h1z"/>
  <path d="M5 2.905a1 1 0 0 1 .9-.995l8-.8a1 1 0 0 1 1.1.995V3L5 4V2.905z"/>
</svg>  Hank Williams' version
</a>
</p>

<p>
<a href="https://www.youtube.com/watch?v=qFiGiOWcJ9c" class="text-decoration-none">
<!-- <div class="fs-4 mb-3"> -->
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-music-note-beamed" viewBox="0 0 16 16">
  <path d="M6 13c0 1.105-1.12 2-2.5 2S1 14.105 1 13c0-1.104 1.12-2 2.5-2s2.5.896 2.5 2zm9-2c0 1.105-1.12 2-2.5 2s-2.5-.895-2.5-2 1.12-2 2.5-2 2.5.895 2.5 2z"/>
  <path fill-rule="evenodd" d="M14 11V2h1v9h-1zM6 3v10H5V3h1z"/>
  <path d="M5 2.905a1 1 0 0 1 .9-.995l8-.8a1 1 0 0 1 1.1.995V3L5 4V2.905z"/>
</svg>  Tommy Roe's version
</a>
</p>

<h3>Some additional insights</h3>
Coming soon...
