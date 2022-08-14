---
layout: paper
tag: renault
category: 2022
date: 2022-01-01
title: |
    Differentiable Piano Model for MIDI-to-Audio Performance Synthesis 
authors: Lenny Renault, Rémi Mignot, Axel Roebel
abstract: |
    Recent neural-based synthesis models have achieved impressive results for musical instrument sound generation. 
    In particular, the Differentiable Digital Signal Processing (DDSP) framework enables the usage of spectral modeling 
    analysis and synthesis techniques in fully differentiable architectures. Yet currently, it has only been used for 
    modeling monophonic instruments. Leveraging the interpretability and modularity of this framework, the present work 
    introduces a polyphonic differentiable model for piano sound synthesis, conditioned on Musical Instrument Digital 
    Interface (MIDI) inputs. The model architecture is motivated by high-level acoustic modeling knowledge of the instrument 
    which, in tandem with the sound structure priors inherent to the DDSP components, makes for a lightweight, interpretable 
    and realistic sounding piano model. The proposed model has been evaluated in a listening test, demonstrating improved 
    sound quality compared to a benchmark neural-based piano model, with significantly less parameters and even with reduced 
    training data. The same listening test indicates that physical-modeling-based models still achieve better quality, but 
    the differentiability of our lightened approach encourages its usage in other musical tasks dealing with polyphonic 
    audio and symbolic data.
---