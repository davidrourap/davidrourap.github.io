---
title: "When the tool you need doesn't exist, build it"
date: 2026-06-19
category: science
description: "CapiPy started as a frustrated postdoc's answer to a gap in bioinformatics tooling. It ended up published in Bioinformatics and pointing toward a startup."
draft: false
---

There's a moment that will be familiar to many scientist out there who have started using computational tools: you know exactly what analysis you need, you can describe it clearly, and you cannot find software that does it. And building it is outside your expertise, or so you think.

For me, that moment came somewhere in my first postdoc at the University of Bern, while trying to figure out where on a protein's surface to attach it to a solid support.

## The problem

Enzyme immobilization, aka fixing an enzyme to a carrier material so it can be reused, is at its core a structural problem. The enzyme has a three-dimensional shape. The active site (the business end) needs to stay accessible. Regions important for flexibility need to stay flexible. And the chemistry you use to attach the enzyme to the surface will target specific amino acids (lysines, cysteines, and so on) so you need to know where those are, how many are surface-exposed, and how close they sit to the active site.

None of this is exotic. Structural biologists have the data. PDB files contain coordinates for every atom in a protein. The information is there. But pulling it out in a systematic, reproducible way required opening pymol, typing a few commands, dragging and turning the protein until you have a clear idea, and even counting manually those residues. Every time.

## Building CapiPy

CapiPy started as a personal frustration project. The name stands for *Computer-Aided Protein Immobilization in Python* — which tells you it was named by a scientist, not a marketing expert (at the time, I think I got better).

The idea was straightforward: take a PDB file as input, compute the relevant structural features (surface exposure of reactive residues, distances from the active site, accessible surface area), and present the results in a form that an experimentalist could directly use to make decisions. No command line required. A GUI that a wet-lab researcher could run without a bioinformatics background.

The implementation involved BioPython for structure parsing, a GUI built in Tkinter, and a lot of iteration with colleagues in the group who were the actual intended users. The feedback loop was short — the people testing it were sitting in the same building, running real experiments. When something didn't make sense in the interface or the output, we found out quickly.

 I had assumed this was a niche problem, specific to my group's particular workflow. But once we shared it — first informally, then as a preprint, then as a publication in *Bioinformatics* in 2021 — it became clear that the gap was real! Groups doing immobilization work had been solving this problem the same way we had: by hand, inconsistently, slowly.

# My takeaway

There's a version of this story that ends with "so I published a paper and moved on." That's a fine outcome.

But the more interesting thing CapiPy taught me was what it feels like when software is genuinely useful to the person holding a pipette. Not elegant from a computer science perspective (it was written by a chemist, and it shows), but directly connected to the decision being made at the bench: which surface residue do I target, and why?

Domain expertise is not a substitute for good software engineering. But domain expertise is what tells you if a problem is worth solving in the first place.

## What came next

CapiPy was the first time I built something that other scientists used and found valuable. It changed how I thought about research outputs. Not just papers, but actual tools I could share with people.

That shift in thinking was part of what led, eventually, to [inseit](https://www.inseit.ch). If bioinformatics-guided analysis could inform one immobilization decision at a time, what would it look like to build a platform that systematically learned from every experiment, and made those decisions faster and better over time?

The tool nobody asked for turned out to be pointing somewhere.
