---
layout: paper
tag: doras
category: 2022
date: 2022-12-01
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

Coming soon...