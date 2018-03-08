% Fix the app issues for multiple entries
% check line by line and add multiple issues at a time

function c = addme(a,b)
% ADDME Add two values togather
% C = ADDME(A) adds A to itself.
% C = ADDME(A,B) adds A and B togather
%
% see also SUM, PLUS.

switch nargin
    case 2
        c = a + b
    case 1
        c = a + a
    otherwise
        c = 0
end





