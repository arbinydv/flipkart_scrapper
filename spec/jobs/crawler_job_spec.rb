require 'rails_helper'

RSpec.describe CrawlerJob, type: :job do
  let(:product) { create(:product) }

  it 'queues a job with id' do
    job_id = CrawlerJob.perform_async(product.id)
    expect(job_id).not_to be_nil
  end
end
