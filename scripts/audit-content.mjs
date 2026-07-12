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
  topicSummaries: report.topicSummaries.map((summary) => ({
    topicId: summary.topicId,
    total: summary.total,
    byDifficulty: summary.byDifficulty,
    byType: summary.byType,
    subthemeCount: summary.subthemeCount,
    answerIndexCounts: summary.answerIndexCounts,
    dominantType: summary.dominantType,
    dominantTypeRatio: Number(summary.dominantTypeRatio.toFixed(2)),
  })),
  errors: errors.length,
  warnings: warnings.length,
}, null, 2));

for (const issue of report.issues.slice(0, 120)) {
  console.log(`${issue.severity.toUpperCase()} ${issue.id}: ${issue.message}`);
}

if (errors.length) process.exit(1);
