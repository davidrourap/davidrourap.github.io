# Writing guide

Derived from the published posts. Use this when drafting new ones — or when asking Claude to draft them.

---

## Voice

First person, always. The "I" is not decorative — it's the point. Readers are here because of who you are and how you think, not for generic science communication.

Honest over polished. If something is uncertain, say so ("or so we think"). If something surprised you, say it surprised you. If you didn't know where to start, say that. The posts that land are the ones that don't pretend the path was cleaner than it was.

Casual but substantive. You can write "It's insane." in the middle of a paragraph about evolutionary biology. You can start a sentence with "And hey,". The informality is not sloppiness — it's a signal that you're talking to the reader, not performing for them.

Short sentences land. Long sentences explain. Use both.

---

## Structure

**Hook first.** Every post starts with something specific — a moment, a scenario, a thing you noticed. Not a thesis statement. Not "in this post I will discuss." A scene:

> *There's a moment I remember clearly from early in my biology degree.*

> *There is a specific kind of discomfort that comes just before you publish something you made.*

> *There's a version of founder community that is mostly performance.*

**Section headers are conversational.** They don't need to be formal or parallel. They can be opinionated:

- "What still gets me about proteins — and I don't think I'll get past it"
- "The wall that persists"
- "My takeaway"

**Endings are short and real.** Don't wrap up with a motivational paragraph. Land on something true and leave it:

- *Still figuring it out.*
- *So far, nothing bad has happened.*
- *The tool nobody asked for turned out to be pointing somewhere.*
- *That's worth showing up for.*

---

## What your posts do well

**Specific beats generic.** Not "a molecular visualization program" — *Chimera*. Not "a prize competition" — *the W.A. de Vigier Award*. Specificity is what makes writing feel true.

**You admit what you didn't know.** This is unusual and it's what makes the posts feel trustworthy. Most people write as if they always had a plan. You write as if you were figuring it out in real time, because you were.

**You mix registers.** Technical terms (PDB files, lysines, cryo-electron microscopy) next to casual asides (Too bad if your protein is new, different or just... strange). This is the right instinct for a mixed audience — it says "I'm not dumbing this down, but I'm also not gatekeeping it."

**Personal connection to the science.** The best sections aren't pure explainer — they have you in them. Why you found it interesting, when you first encountered it, what surprised you. That's what separates it from a Wikipedia article.

---

## What to watch for

**Analogies that feel labored.** If an analogy needs two sentences to set up, it probably costs more than it gives. Cut it or simplify it.

**Overly wrapped-up conclusions.** If the ending sounds like the closing paragraph of an essay, it's too tidy. Real thoughts don't resolve that cleanly.

**Lists where prose would do.** A list of bullet points stops the rhythm. If the ideas connect, write them as sentences.

**Academic hedging.** Phrases like "it is worth noting that" or "one might argue" are not your register. If you have a point, make it.

---

## Frontmatter

```yaml
title: "Title here"          # keep it short and specific
date: YYYY-MM-DD
category: science | startup | personal
description: "One sentence — what the post is actually about, not what it argues."
draft: false
```

Descriptions in your own words are better than formal summaries. Compare:

- *"An examination of the challenges of enzyme immobilization in industrial settings."* — no
- *"Enzymes are nature's perfect catalysts. So why are they so hard to use at industrial scale?"* — yes

---

## When asking Claude to draft

Tell it:
- The topic and the angle (what's the specific thing you want to say, not just the subject)
- The anchor moment or example (what concrete thing does it build around)
- Any phrases or sentences you've already written — paste them in, the voice will follow
- Category: science / startup / personal

Claude will produce a cleaner, more formal version than your finished posts. That's fine — use it as scaffolding, then make it yours by:
- Adding the specific names, tools, moments you remember
- Cutting the analogies that feel too neat
- Making the section headers less formal
- Adding the asides and qualifiers that reflect what you actually think
