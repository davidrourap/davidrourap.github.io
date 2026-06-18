---
title: "AI as translator: from scientific idea to web application"
date: 2026-06-20
category: science
description: "CapiPy was a Tkinter GUI written by a chemist. CapiPy-web was its attempt at becoming something anyone could use. What AI tools change about that kind of translation."
draft: false
---

There's a specific aesthetic to scientific software. You know it when you see it: a grey window with text fields and a button that says "Run". Or even interaction with the terminal. No hover states, no responsive layout. Does the job, sure, but also gives you very little interaction potential. The kind of interface that only makes sense to the person who wrote it — and only because they also know what the underlying algorithm does.

This is not a criticism. CapiPy, the protein immobilization analysis tool I built during my postdoc, looks exactly like this. It works. It was published in *Bioinformatics*. People use it. But it is unmistakably a piece of software built by a chemist in Python, in 2020 before vibe-coding, to solve a specific problem that was driving me and my colleagues slightly mad.

The question that nagged at me afterwards was: what would it look like to make this accessible to anyone? I tried individual meetings to install and use, but this is very limiting. Both for my time and for theirs. No one will use a software that can't be installed easily. Not even researchers comfortable enough with Python to pip-install a package and run a script.

## CapiPy-web: the experiment

CapiPy-web was an attempt to answer that. The idea was to translate the core functionality (upload a PDB structure, get back an analysis of surface residues, distances from the active site, immobilization recommendations) into a web application that ran in a browser and required nothing from the user except an internet connection and a pdb file or code.

On paper, this is straightforward. In practice, if your background is enzymology rather than web development, it involves learning a considerable amount: a web framework, client-server architecture, file handling in a browser context, deployment. Not that cannot be learned, but not trivial either. And the real problem is that I didn't even know where to start. And to me, the most interesting part, the domain knowledge,, was already in CapiPy. The web layer was just packaging and a steep learning curve for me.

## What has changed since then

The tools available for this kind of translation have improved dramatically, and most of that improvement comes from AI.

The bottleneck was never the scientific logic. I understood the problem well enough to implement the analysis in Python. The bottleneck was everything else: writing idiomatic JavaScript, wiring up file uploads, handling errors gracefully, making something look like it was built by someone who cared about UX.

These are learnable skills. But when you can describe in plain language what you want a component to do and get back *working* code, it's a massive shift. And emphasize here the *working* because, this did not take away the learning but made it so much easier. The scientific idea remains the scarce input. The adjacent implementation work becomes much cheaper.

I think there's a large space of tools that sit between "Python script that only I can run" and "production application built by a team" — prototypes, internal tools, small web interfaces for specific research workflows — where AI has genuinely shifted what's feasible for a domain expert working alone.

## The wall that persists

What AI does not change is the difficulty of knowing what to build.

CapiPy exists because I spent enough time doing protein immobilization experiments to notice that a specific analysis was missing from the available toolkit. That observation required knowing what the analysis was, why it mattered, and what a useful output would look like. None of that came from software, it came from bench work, from reading the literature, from conversations with people trying to solve the same problem. And maybe this too will come from conversations with agents soon. In fact, I see myself using it more and more to bounce ideas off. To create small tools to test quickly.

What's changed is the real distance between having an idea and making it usable by someone else. That distance was high enough, for long enough, that many genuinely useful scientific tools stayed buried in their own lab. 
