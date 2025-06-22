'''
<input format>
<fout.txt>
person_1_pair_1
person_2_pair_1
...
person_1_pair_z
person_2_pair_z
</fout.txt>
</input format>
'''

import networkx as nx
import sys
############################################## - main func - ##############################################

def find_pairs(people, taken_pairs) -> set[tuple]:
    taken_pairs = {frozenset(pair) for pair in taken_pairs}

    P = nx.Graph() #  create a graph
    P.add_nodes_from(people) # let the nodes of the graph be people

    for i in range(len(people)): # iterate over all people 
        for j in range(i + 1, len(people)): # iterate over all people "after" the person i
            pair = frozenset([people[i], people[j]]) # create a frozenset of a pair of the two people
            # create an edge with weight 0 if there is no such pair already and an edge with weight 1 if there is such a pair already
            if pair not in taken_pairs:
                P.add_edge(people[i], people[j], weight = 0)
            else:
                P.add_edge(people[i], people[j], weight = 1)

    matched_people = nx.algorithms.matching.min_weight_matching(P) # match people in pairs with minimal weight sum
    return matched_people # return the result

############################################## - actual code - ##############################################

with open('taken_pairs.txt', 'r') as fin: # read input file
    lines = fin.readlines()

taken_pairs = [(lines[i].strip(), lines[i+1].strip()) for i in range(0, len(lines), 2)]
people = sys.argv[1:]

matched_people = find_pairs(people, taken_pairs)

with open('fout.txt', 'w') as fout:
    for pair in matched_people:
        fout.write(' '.join(sorted(pair)) + '\n')

with open('taken_pairs.txt', 'a') as taken:
    for pair in matched_people:
        taken.write('\n'.join(pair) + '\n')