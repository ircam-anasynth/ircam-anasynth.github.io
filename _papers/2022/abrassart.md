---
layout: paper
tag: abrassart
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

##### 1. Ly-Me+Ha examples

**1.1 Ly > Me+Ha**

<figure>
<center>
<img src="/assets/images/papers/2022/abrassart/you_rascal_you_final.jpg" width="800" />
<figcaption class="figure-caption text-center"><big>Figure 1.1.1: Ly better than Me+Ha- d<sub>Me+Ha</sub>=1.470, d<sub>Ly</sub>=0.238. </big></figcaption>
</center>
</figure>


<p>
<a href="https://www.youtube.com/watch?v=tvGMgafW3_o" class="text-decoration-none">
<!-- <div class="fs-4 mb-3"> -->
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-music-note-beamed" viewBox="0 0 16 16">
  <path d="M6 13c0 1.105-1.12 2-2.5 2S1 14.105 1 13c0-1.104 1.12-2 2.5-2s2.5.896 2.5 2zm9-2c0 1.105-1.12 2-2.5 2s-2.5-.895-2.5-2 1.12-2 2.5-2 2.5.895 2.5 2z"/>
  <path fill-rule="evenodd" d="M14 11V2h1v9h-1zM6 3v10H5V3h1z"/>
  <path d="M5 2.905a1 1 0 0 1 .9-.995l8-.8a1 1 0 0 1 1.1.995V3L5 4V2.905z"/>
</svg>  Jimmy Noone's version
</a>
</p>

<p>
<a href="https://www.youtube.com/watch?v=34KQ_sQ7Emk" class="text-decoration-none">
<!-- <div class="fs-4 mb-3"> -->
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-music-note-beamed" viewBox="0 0 16 16">
  <path d="M6 13c0 1.105-1.12 2-2.5 2S1 14.105 1 13c0-1.104 1.12-2 2.5-2s2.5.896 2.5 2zm9-2c0 1.105-1.12 2-2.5 2s-2.5-.895-2.5-2 1.12-2 2.5-2 2.5.895 2.5 2z"/>
  <path fill-rule="evenodd" d="M14 11V2h1v9h-1zM6 3v10H5V3h1z"/>
  <path d="M5 2.905a1 1 0 0 1 .9-.995l8-.8a1 1 0 0 1 1.1.995V3L5 4V2.905z"/>
</svg>  John Fogerty's version
</a>
</p>

There are many versions whose musical style, melody and harmony differ greatly from the original, and where only the lyrics can still help to identify them. This is illustrated on Figure 1.1.1, which shows that the Jimmy Noone's and John Fogerty's versions of "You Rascal You" are very different musically while the lyrics exhibit enough similarity to be correctly identified.

<figure>
<center>
<img src="/assets/images/papers/2022/abrassart/i_natt.jpg" width="800" />
<figcaption class="figure-caption text-center"><big>Figure 1.1.2: Ly better than Me+Ha- d<sub>Me+Ha</sub>=1.448, d<sub>Ly</sub>=0.685. </big> </figcaption>
</center>
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

It also appears that our approximated ALR system is efficient for different languages. For instance, the versions of Asta Kask and of The Hep Stars of the song "I natt jag drömde", are different in melody and harmony while the lyrics remain similar, despite the fact that the lyrics are in Swedish.


**1.2 Ly < Me+Ha**

<figure>
<center>
<img src="/assets/images/papers/2022/abrassart/nightshift_final.jpg" width="800" />
<figcaption class="figure-caption text-center"><big>Figure 1.2.1: Ly worse than Me+Ha- d<sub>Me+Ha</sub>=0.597, d<sub>Ly</sub>=1.282. </big></figcaption>
</center>
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

A case were lyrics can be counter-productive is the instrumental version case. In the example shown in Figure 1.2.1, the version of "Nightshift" by the Commodores has lyrics while the one of Jim Horn's does not. We noticed that the system sometimes considers lead instruments as voices. However, this Ly false negative is correctly caught by the Me+Ha. 

##### 2. Rh-Me+Ha examples

**2.1 Rh > Me+Ha**

<figure>
<center>
<img src="/assets/images/papers/2022/abrassart/pimpf_final.jpg" width="800" />
<figcaption class="figure-caption text-center"> <big> Figure 2.1.1: Rh better than Me+Ha - d<sub>Me+Ha</sub>=1.084, d<sub>Rh</sub>=0.459 </big></figcaption>
</center>
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

Even though Rh yields poor performances in general, there are cases where it is the only feature available to identify versions. This is illustrated on Figure 1.1.1, which shows the Rh, Me and Ha features for two versions of "Pimpf". In this song, the melody is almost non-existent, and the harmony is very different between both versions. Only a few bass notes in the middle are salient enough to identify the song, and this short bassline appears similarly on the two FP features.

<figure>
<center>
<img src="/assets/images/papers/2022/abrassart/mamas_little_baby.jpg" width="800" />
<figcaption class="figure-caption text-center"> <big>Figure 2.1.2: Rh better than Me+Ha - d<sub>Me+Ha</sub>=1.329, d<sub>Rh</sub>=0.714 </big></figcaption>
</center>
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

There are also other cases where Rh might be a good discriminating feature, for instance during live concerts. One version of "Mama's Little Baby" is recorded in studio while the other is a concert filmed from the audience. The Me+Ha distance between these two versions is high because of the bad live recording quality. On the other hand, the drums are distinguishable enough to establish similarity.

**2.2 Rh < Me+Ha**

<figure>
<center>
<img src="/assets/images/papers/2022/abrassart/kenties_final.jpg" width="800" />
<figcaption class="figure-caption text-center"><big>Figure 2.2.1: Rh worse than Me+Ha - d<sub>Me+Ha</sub>=0.498, d<sub>Rh</sub>=1.380 </big> </figcaption>
</center>
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

On the contrary, Rh can easily produce wrong results. This is illustrated on 2.2.1, which shows the features of two versions of "Kenties kenties kenties". Although melody and harmony are similar, the rhythm is very different.

<figure>
<center>
<img src="/assets/images/papers/2022/abrassart/anybody_know_my_name.jpg" width="800" />
<figcaption class="figure-caption text-center"> <big>Figure 2.2.2: Rh worse than Me+Ha - d<sub>Me+Ha</sub>=0.526, d<sub>Rh</sub>=1.476 </big></figcaption>
</center>
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

Another example is "Doesn't Anybody Know My Name", which does not exhibit the same rhythmic pattern in Hank Williams' version as in Tommy Roe's.

<h3>Some additional insights</h3>


#### 1. Quantitative analysis 

In this section, we detail the quantitative results presented in the article. We display the results for Da-Tacos-Vocals (with no instrumental songs). We also remind Da-Tacos results.

<table class="table table-striped">
  <caption><big>Table 1.1: Performance metrics obtained on Da-Tacos and Da-Tacos-Vocals for input features and their combinations.</big></caption>
  <thead>
    <tr>
      <th scope="col">Test set</th>
      <th colspan="3">SHS<sub>4-</sub></th>
      <th colspan="3">Da-Tacos-Vocals</th>
      <th colspan="3">Da-Tacos</th>
      </tr>
      <tr>
      <th scope="col">Features</th>
      <th scope="col">MAP</th>
      <th scope="col">MT@10</th>
      <th scope="col">MR1</th>
      <th scope="col">MAP</th>
      <th scope="col">MT@10</th>
      <th scope="col">MR1</th>
      <th scope="col">MAP</th>
      <th scope="col">MT@10</th>
      <th scope="col">MR1</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td scope="row">Me</td>
      <td>0.432</td>
      <td>0.834</td>
      <td>1118</td>
      <td>0.496</td>
      <td>4.400</td>
      <td>52</td>
      <td>0.363</td>
      <td>4.064</td>
      <td>97</td>
    </tr>
    <tr>
      <td scope="row">Ha</td>
      <td>0.542</td>
      <td>1.014</td>
      <td>979</td>
      <td>0.513</td>
      <td>4.550</td>
      <th>51</th>
      <th>0.488</th>
      <th>5.256</th>
      <th>63</th>
    </tr>
    <tr>
      <td scope="row">Rh</td>
      <td>0.100</td>
      <td>0.235</td>
      <td>2932</td>
      <td>0.075</td>
      <td>0.762</td>
      <td>204</td>
      <td>0.055</td>
      <td>0.689</td>
      <td>244</td>
    </tr>
    <tr>
      <td scope="row">Ly</td>
      <th>0.677</th>
      <th>1.203</th>
      <th>959</th>
      <th>0.678</th>
      <th>5.970</th>
      <td>60</td>
      <td>0.393</td>
      <td>4.596</td>
      <td>199</td>
    </tr>
    <tr>
      <th colspan="10">Combinations</th>
    </tr>
    <tr>
      <td scope="row">Me+Ha</td>
      <td>0.697</td>
      <td>1.270</td>
      <td>447</td>
      <td>0.717</td>
      <td>6.290</td>
      <td>21</td>
      <th>0.626</th>
      <th>6.668</th>
      <th>32</th>
    </tr>
    <tr>
      <td scope="row">Me+Ha+Rh</td>
      <td>0.692</td>
      <td>1.262</td>
      <td>408</td>
      <td>0.650</td>
      <td>5.717</td>
      <td>20</td>
      <td>0.557</td>
      <td>5.994</td>
      <td>33</td>
    </tr>
    <tr>
      <td scope="row">Me+Ha+Ly</td>
      <th>0.803</th>
      <th>1.409</th>
      <td>287</td>
      <th>0.818</th>
      <th>7.205</th>
      <td>16</td>
      <td>0.602</td>
      <td>6.480</td>
      <td>33</td>
    </tr>
    <tr>
      <td scope="row">Me+Ha+Rh+Ly</td>
      <td>0.789</td>
      <td>1.391</td>
      <th>281</th>
      <td>0.765</td>
      <td>6.714</td>
      <th>14</th>
      <td>0.560</td>
      <td>6.054</td>
      <td>33</td>
    </tr>
  </tbody>
</table> 

Compared to the entire Da-Tacos Me, Ha and Rh features are improved (almost 15% more for the Me MAP, between 2 and 3% for the Ha and Rh MAP). But the most important improvement is the Ly feature which has its MAP increased by almost 30%. This confirms our hypothesis that the Da-Tacos results were decreased because of the numerous instrumental tracks. The add of the lyrics to the baseline no longer degrades results.

#### 2. Distributions

In this section we illustrate what distances, features tend to give to version pairs (positives, *p<sub>+</sub>(d)*) and non version pairs (negatives, *p<sub>-</sub>(d)*). Here we plot the distributions for both cases and the distributions for combined features for all datasets used.

<div class="container">
  <div class="row">
   <div class="col">
      <span><img src="/assets/images/papers/2022/abrassart/f0_distrib.jpg" width="300"/></span>
      <figcaption class="figure-caption text-center">(a) Me distribution.</figcaption>
   </div>
   <div class="col">
      <span><img src="/assets/images/papers/2022/abrassart/cpcp_distrib.jpg" width="300"/></span>
      <figcaption class="figure-caption text-center">(b) Ha distribution.</figcaption>
   </div> 
   <div class="col">
      <span><img src="/assets/images/papers/2022/abrassart/fp_distrib.jpg" width="300"/></span>
      <figcaption class="figure-caption text-center">(c) Rh distribution.</figcaption>
   </div> 
   <div class="col">
      <span><img src="/assets/images/papers/2022/abrassart/ly_distrib.jpg" width="300"/></span>
      <figcaption class="figure-caption text-center">(d) Ly distribution.</figcaption>
    </div>
  </div>
  <figcaption class="figure-caption text-center"><big>Figure 2.1: Distributions for SHS</big><sub>4-</sub>.</figcaption>
</div>

We also display the Bhattacharyya coefficient (BC) which is a measure of the overlap between two distributions. The closer the coefficient is to zero, the more the distributions are separated and therefore the risk of false positives or negatives is decreased. As showed in Section 4.2. in the article, the best features are Ha and Ly which have the lowest BCs. We can also add that all features seems to be better at determining if songs are non-versions than versions by looking at how the negative distribution is narrower.  We can note on Ly distribution, a bump in the positives with a high distance, this might be caused by some instrumental songs, song with few lyrics or versions in different languages. This can also be supported by the Ly distributions on Da-Tacos and Da-Tacos-Vocals on figure 2.2.

<div class="container">
<center>
<div class="row">
    <div class="col">
            <span><img src="/assets/images/papers/2022/abrassart/ivi_lyric_4501x28_C1.jpg" width="300"/></span>
            <figcaption class="figure-caption text-center">(a) Ly distribution on Da-Tacos.</figcaption>
    </div>
    <div class="col">
            <span><img src="/assets/images/papers/2022/abrassart/ivi_lyric_4501x28_no_instr.jpg" width="300"/></span>
            <figcaption class="figure-caption text-center">(b) Ly distribution on Da-Tacos-Vocals.</figcaption>
    </div> 
  </div>
  <figcaption class="figure-caption text-center"><big>Figure 2.2: Ly distributions for Da-Tacos and Da-Tacos-Vocals.</big></figcaption>
</center>
</div>

The positive distribution for Da-Tacos presents a big bump around a high distance, which is clearly attenuated in Da-Tacos-Vocals.

Finally we can see on Figure 2.3 how features combination can improve results. Here, the distributions are very well spaced which avoids a big majority of false positives or negatives. 

<div class="container">
<center>
<div class="row">
<div class="col">
  <span><img src="/assets/images/papers/2022/abrassart/Me+Ha+Ly_shs4.jpg" width="300" /></span>
  <figcaption class='figure-caption text-center'>(a) Me+Ha+Ly distribution on SHS<sub>4-</sub></figcaption>
</div>
<div class="col">
  <span><img src="/assets/images/papers/2022/abrassart/Me+Ha+Ly_datacos.jpg" width="300" /></span>
  <figcaption class='figure-caption text-center'>(b) Me+Ha+Ly distribution on Da-Tacos</figcaption>
</div>
<div class="col">
  <span><img src="/assets/images/papers/2022/abrassart/Me+Ha+Ly_no_instr.jpg" width="300" /></span>
  <figcaption class='figure-caption text-center'>(c) Me+Ha+Ly distribution on Da-Tacos-Vocals</figcaption>
</div>
</div>
<figcaption class="figure-caption text-center"><big>Figure 2.3: Me+Ha+Ly distributions. </big></figcaption>
</center>
</div>


#### 3. Clusters

In this section we display clusters as in the article, with different features and combination and on different datasets.

An interesting way to see how instrumental songs affect the system's performances is to plot clusters for Me+Ha vs. Ly on Da-Tacos and Da-Tacos-Vocals to visualize the false negatives. 

<div class="container">
<center>
<div class="row">
    <div class="col">
            <span><img src="/assets/images/papers/2022/abrassart/Me+Ha-Ly_500_datacos.jpg" width="300"/></span>
            <figcaption class="figure-caption text-center">(a) Ly clusters on Da-Tacos.</figcaption>
    </div>
    <div class="col">
            <span><img src="/assets/images/papers/2022/abrassart/Me+Ha-Ly_500_no_instr.jpg" width="300"/></span>
            <figcaption class="figure-caption text-center">(b) Ly clusters on Da-Tacos-Vocals.</figcaption>
    </div> 
  </div>
  <figcaption class="figure-caption text-center"><big>Figure 3.1: Ly clusters for Da-Tacos and Da-Tacos-Vocals.</big></figcaption>
</center>
</div>


Indeed, we can see on Figure 3.1.(a) that Ly tends to give to negative pairs more smaller distances, and that this behaviour does not exist with Da-Tacos-Vocals (Figure 3.1.(b)) which suggests that those false positives were the instrumental songs which had small distances between them because of the lack of information in the lyrics.

