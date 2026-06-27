import { auditContent } from '../src/contentAudit.ts';
import { questions, topics } from '../src/content.ts';

const report = auditContent(topics, questions);
const errors = report.issues.filter((issue) => issue.severity === 'error');
const warnings = report.issues.filter((issue) => issue.severity === 'warning');

console.log(JSON.stringify({
  topics: report.topics,
  questions: report.questions,
  multipleChoice: report.multipleChoice,
  answerIndexCounts: report.answerIndexCounts,
  errors: errors.length,
  warnings: warnings.length,
}, null, 2));

for (const issue of report.issues.slice(0, 50)) {
  console.log(`${issue.severity.toUpperCase()} ${issue.id}: ${issue.message}`);
}

if (errors.length) process.exit(1);
