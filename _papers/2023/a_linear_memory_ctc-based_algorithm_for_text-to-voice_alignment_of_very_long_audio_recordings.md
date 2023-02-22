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


Welcome to the companion website of our paper ["A linear memory CTC-based algorithm for text-to-voice
alignment of very long audio recordings"](https://www.mdpi.com/2076-3417/13/3/1854).
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

The Chapter 10 audio, text and timestamps are available 
[here](https://anasynth.papers.ircam.fr/2023/a-linear-memory-ctc-based-algorithm-for-text-to-voice-alignment-of-very-long-audio-recordings/chapter10/russell_the_problems_of_philosophy_chap_10.zip).

#### Playlist50 (singing voice)

For singing, we leveraged the available annotations of the [DALI dataset](https://github.com/gabolsgabs/DALI) in which 
all alignments are have already been annotated at word level. We selected 150 songs that were not used during our model 
training, and we gathered a playlist containing 50 of these songs. We simply concatenated both the audio and the 
corresponding annotated lyrics available in DALI. The playlist contains 18094 words, and the corresponding audio has a 
duration of 2:50:24 (HH:MM:SS). The other 100 songs were kept for our experiments (see paper).

The Playlist50 audio, annotations and DALI ids are available 
[here](https://anasynth.papers.ircam.fr/2023/a-linear-memory-ctc-based-algorithm-for-text-to-voice-alignment-of-very-long-audio-recordings/playlist50/playlist50.zip).


<br/>

### Results

#### Speech

We provide below a visualisation of the alignment of more than two hours of audio with the corresponding text 
(the chapters 7 to 13) of the Librivox audiobook 
["The problems of philosophy", by B. Russell](https://librivox.org/the-problems-of-philosophy-by-bertrand-russell-2/).
It appears clearly that the alignment remains accurate even after more than 2 hours of audio 
(use full screen for better rendering).

<div class="row">
    <div class="d-flex justify-content-center">
        <div class="col-8">
            <div class="embed-responsive embed-responsive-4by3">
                <video controls>
                    <source src="https://anasynth.papers.ircam.fr/2023/a-linear-memory-ctc-based-algorithm-for-text-to-voice-alignment-of-very-long-audio-recordings/results/chapter_07-13_alignment.mp4" type="video/mp4">
                </video>
            </div>
        </div>
    </div>
</div>
<br/>


#### Singing voice

We provide below a visualisation of the alignment of more two hours of audio with the corresponding text 
of Playlist50. It appears clearly that the alignment remains accurate even after more than 2 hours of audio 
(use full screen for better rendering).

<div class="row">
    <div class="d-flex justify-content-center">
        <div class="col-8">
            <div class="embed-responsive embed-responsive-4by3">
                <video controls>
                    <source src="https://anasynth.papers.ircam.fr/2023/a-linear-memory-ctc-based-algorithm-for-text-to-voice-alignment-of-very-long-audio-recordings/results/playlist50_alignment.mp4" type="video/mp4">
                </video>
            </div>
        </div>
    </div>
</div>
<br/>

#### Other languages

We provide below a visualisation of the alignment of speech in other languages than English. These audio are excerpts
of open source Librivox audiobooks in different languages. The system succeeds to align text-to-voice 
despite the fact that it has been trained on English language only (use full screen for better rendering).

##### Arabic

An extract of ["كليلة ودمنة (Kalila wa dimna)", by Abdullah Ibn al-Muqaffaʿ](https://forum.librivox.org/viewtopic.php?f=60&t=79535). The original text was 
manually transliterated (we tried other options to automate the transliteration such as Google Translate or 
[polyglot](https://github.com/aboSamoor/polyglot), but their transliteration was not enough accurate).
<div class="row">
    <div class="d-flex justify-content-center">
        <div class="col-8">
            <div class="embed-responsive embed-responsive-4by3">
                <video controls>
                    <source src="https://anasynth.papers.ircam.fr/2023/a-linear-memory-ctc-based-algorithm-for-text-to-voice-alignment-of-very-long-audio-recordings/results/kalila_alignment.mp4" type="video/mp4">
                </video>
            </div>
        </div>
    </div>
</div>
<br/>

##### Chinese

An extract of ["Art of War", by Sun Tzu](https://librivox.org/the-art-of-war-by-sun-tzu-3/). The original text was 
transliterated with [pinyin](https://pypi.org/project/pinyin).
<div class="row">
    <div class="d-flex justify-content-center">
        <div class="col-8">
            <div class="embed-responsive embed-responsive-4by3">
                <video controls>
                    <source src="https://anasynth.papers.ircam.fr/2023/a-linear-memory-ctc-based-algorithm-for-text-to-voice-alignment-of-very-long-audio-recordings/results/suntzu_alignment.mp4" type="video/mp4">
                </video>
            </div>
        </div>
    </div>
</div>
<br/>

##### Czech

An extract of ["Krysař", by Viktor Dyk](https://librivox.org/krysar-by-viktor-dyk/).
<div class="row">
    <div class="d-flex justify-content-center">
        <div class="col-8">
            <div class="embed-responsive embed-responsive-4by3">
                <video controls>
                    <source src="https://anasynth.papers.ircam.fr/2023/a-linear-memory-ctc-based-algorithm-for-text-to-voice-alignment-of-very-long-audio-recordings/results/kryzar_alignment.mp4" type="video/mp4">
                </video>
            </div>
        </div>
    </div>
</div>
<br/>

##### Dutch

An extract of ["Anno 2070: een blik in de toekomst", by Pieter Harting](https://librivox.org/anno-2070-een-blik-in-de-toekomst-by-dr-dioscorides/).
<div class="row">
    <div class="d-flex justify-content-center">
        <div class="col-8">
            <div class="embed-responsive embed-responsive-4by3">
                <video controls>
                    <source src="https://anasynth.papers.ircam.fr/2023/a-linear-memory-ctc-based-algorithm-for-text-to-voice-alignment-of-very-long-audio-recordings/results/harting_alignment.mp4" type="video/mp4">
                </video>
            </div>
        </div>
    </div>
</div>
<br/>

##### French

An extract of ["De l'esprit des lois", by Montesquieu](https://librivox.org/de-lesprit-des-lois-by-charles-louis-de-montesquieu-1004//).
<div class="row">
    <div class="d-flex justify-content-center">
        <div class="col-8">
            <div class="embed-responsive embed-responsive-4by3">
                <video controls>
                    <source src="https://anasynth.papers.ircam.fr/2023/a-linear-memory-ctc-based-algorithm-for-text-to-voice-alignment-of-very-long-audio-recordings/results/espritdeslois_alignment.mp4" type="video/mp4">
                </video>
            </div>
        </div>
    </div>
</div>
<br/>

##### German

An extract of ["Kritik der praktischen Vernunft", by Immanuel Kant](https://librivox.org/sammlung-kurzer-deutscher-prosa-016-by-various/).
<div class="row">
    <div class="d-flex justify-content-center">
        <div class="col-8">
            <div class="embed-responsive embed-responsive-4by3">
                <video controls>
                    <source src="https://anasynth.papers.ircam.fr/2023/a-linear-memory-ctc-based-algorithm-for-text-to-voice-alignment-of-very-long-audio-recordings/results/kant_alignment.mp4" type="video/mp4">
                </video>
            </div>
        </div>
    </div>
</div>
<br/>

##### Greek

An extract of ["Anixi", by Kostas Karyotakis](https://librivox.org/multilingual-poetry-collection-volume-012/). The original text was 
transliterated with [polyglot](https://github.com/aboSamoor/polyglot).
<div class="row">
    <div class="d-flex justify-content-center">
        <div class="col-8">
            <div class="embed-responsive embed-responsive-4by3">
                <video controls>
                    <source src="https://anasynth.papers.ircam.fr/2023/a-linear-memory-ctc-based-algorithm-for-text-to-voice-alignment-of-very-long-audio-recordings/results/anixi_alignment.mp4" type="video/mp4">
                </video>
            </div>
        </div>
    </div>
</div>
<br/>

##### Italian

An extract of ["Il Principe", by Niccolò Machiavelli](https://librivox.org/il-principe-by-niccolo-machiavelli/).
<div class="row">
    <div class="d-flex justify-content-center">
        <div class="col-8">
            <div class="embed-responsive embed-responsive-4by3">
                <video controls>
                    <source src="https://anasynth.papers.ircam.fr/2023/a-linear-memory-ctc-based-algorithm-for-text-to-voice-alignment-of-very-long-audio-recordings/results/machiavel_alignment.mp4" type="video/mp4">
                </video>
            </div>
        </div>
    </div>
</div>
<br/>

##### Spanish

An extract of ["Don Quijote", by Cervantes](https://librivox.org/don-quijote-vol-1-by-miguel-de-cervantes-saavedra/).
<div class="row">
    <div class="d-flex justify-content-center">
        <div class="col-8">
            <div class="embed-responsive embed-responsive-4by3">
                <video controls>
                    <source src="https://anasynth.papers.ircam.fr/2023/a-linear-memory-ctc-based-algorithm-for-text-to-voice-alignment-of-very-long-audio-recordings/results/cervantes_alignment.mp4" type="video/mp4">
                </video>
            </div>
        </div>
    </div>
</div>
<br/>

<p><small>Visualisations done with <a href="https://forum.ircam.fr/projects/detail/partiels">Partiels</a>.</small></p>