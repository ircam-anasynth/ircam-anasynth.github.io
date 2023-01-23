---
layout: paper
tag: doras
category: 2023
date: 2023-01-01
title: A linear memory CTC-based algorithm for text-to-voice alignment of very long audio recordings 
authors: Guillaume Doras, Yann Teytaut, Axel Roebel
abstract: |
    Synchronisation of a voice recording with the corresponding text is a common task in speech and music processing, 
    and is used in many practical applications (automatic subtitling, audio indexing, etc.). A common approach is to 
    derive a mid-level feature from the audio and to find its optimal alignment to the text with respect to some 
    similarity measure via Dynamic Time Warping (DTW). Recently, a Connectionist Temporal Classification (CTC) approach 
    has been proposed in which the intermediate feature extraction is unnecessary: the character probabilities predicted 
    by a CTC network from the audio are directly used as similarity measure to find the optimal text to voice alignment. 
    While this method yields promising results, the memory complexity of the optimal alignment search remains quadratic 
    in input lengths, limiting its application to relatively short recordings. In this work, we describe how recent 
    improvements brought to the textbook DTW algorithm can be adapted to the CTC context to achieve memory linear 
    complexity. We then detail our overall solution and show that it can align text to several hours of audio with a 
    mean alignment error of 50ms for speech, and 120ms for singing voice. We finally evaluate its robustness to 
    transcription errors and different languages. 
---


Welcome to the companion web site of our paper "A linear memory CTC-based algorithm for text-to-voice
alignment of very long audio recordings"
<br/>


### Datasets 

We release here the evaluation datasets used to compute the alignment performances reported in our paper.

#### Chapter 10 (speech)

For speech, we manually annotated the  audio recording of a whole chapter of a publicly available Librivox audiobook. 
We choose the chapter 10 of ["The problems of philosophy", by B. Russell](https://librivox.org/the-problems-of-philosophy-by-bertrand-russell-2/). 
This audiobook does not belong to the Librispeech's list of books, and its reader does not belong to the Librispeech's 
[list of readers](https://www.openslr.org/resources/12/raw-metadata.tar.gz) either. 

The Chapter 10 contains exactly 100 sentences, and 2672 words, and the corresponding audio has a duration of 21:05 (MM:SS). 
The other chapters were kept for our experiments (see paper).

To manually annotate Chapter 10, we first removed from the audio the Librivox preamble with title and copyright 
information. Then, we performed a first alignment of the audio with the available text with our algorithm, which we 
used as a starting point to align manually and precisely each word to the audio. During the alignment process, we 
corrected a few inconsistencies between the recording and the transcription, so that the text and the audio match 
exactly. 

Alignment was done by adjusting the markers for the start of each word. We used the spectrogram representation to
precisely align the start of the words with the corresponding onsets. 

We publicly released our Chapter 10 manual alignment timestamps [here](tbd).

#### Playlist50 (singing voice)

For singing, we leveraged the available annotations of the [DALI dataset](https://github.com/gabolsgabs/DALI) in which 
all alignments are have already been annotated at word level. We selected 150 songs that were not used during our model 
training, and we gathered a playlist containing 50 of these songs. We simply concatenated both the audio and the 
corresponding annotated lyrics available in DALI. The playlist contains 18094 words, and the corresponding audio has a 
duration of 2:50:24 (HH:MM:SS). The other 100 songs were kept for our experiments (see paper).

The Playlist50 audio and annotations can be found [here](tbd).


<br/>

### Results

#### Speech

We provide below a visualisation of the alignment of more than two hours of audio with the corresponding text 
(the chapters 7 to 13) of the Librivox audiobook 
["The problems of philosophy", by B. Russell](https://librivox.org/the-problems-of-philosophy-by-bertrand-russell-2/)
(use full screen for better rendering).

<div class="row">
    <div class="d-flex justify-content-center">
        <div class="col-8">
            <div class="embed-responsive embed-responsive-4by3">
                <video controls>
                    <source src="tbd" type="video/mp4">
                </video>
            </div>
        </div>
    </div>
</div>
<br/>

#### Singing voice

We provide below a visualisation of the alignment of more two hours of audio with the corresponding text 
of Playlist50 (use full screen for better rendering).

<div class="row">
    <div class="d-flex justify-content-center">
        <div class="col-8">
            <div class="embed-responsive embed-responsive-4by3">
                <video controls>
                    <source src="tbd" type="video/mp4">
                </video>
            </div>
        </div>
    </div>
</div>
<br/>

#### Other languages

We provide below a visualisation of the alignment of speech in other languages than English. The system succeeds
despite the fact that it has been trained on English speech only (use full screen for better rendering).

<div class="row">
    <div class="d-flex justify-content-center">
        <div class="col-8">
            <div class="embed-responsive embed-responsive-4by3">
                <video controls>
                    <source src="tbd" type="video/mp4">
                </video>
            </div>
        </div>
    </div>
</div>
<br/>