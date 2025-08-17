import { spawnSync } from 'node:child_process';

/**
 * 대표 브랜치에서 새로운 feature 브랜치 생성
 * git as 브랜치명 (예: feature/asdf일 경우, git as asdf)
 */
const alias =
    '!sh -c \'b=$(git rev-parse --abbrev-ref origin/HEAD 2>/dev/null|cut -d/ -f2); [ -z "$b" ] && b=main; git fetch -p && git switch "$b" && git pull --ff-only && (git switch -c feature/$1 || git switch feature/$1)\' -';
spawnSync('git', ['config', 'alias.as', alias], { stdio: 'inherit' });
